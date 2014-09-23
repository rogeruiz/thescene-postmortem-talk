### Do this, then that, this too, but when?

![Promises](https://www.dropbox.com/s/odvkg3kge0fmukd/promises.gif?dl=1)

When we first started with Ember, we had heard about the Runloop. we knew that the
Runloop is what made Ember efficient and performant in how it handled data changes.

The Runloop's job is to properly synchronize property changes throughout the
lifecycle of the user's actions, data manipulations, view rendering, server
requests, etc. It does this by queuing these actions into five separate queues.

1. `sync` is for synchronizing bindings
2. `actions` is the main queue for your app's actions
3. `render` is where all DOM-related changes that Ember does for you get done
4. `afterRender` is where you enqueue DOM manipulations that need to occur after
rendering occurs
5. `destroy` is where Ember destroys objects

### Learning to love the Runloop

Remember early when I said we didn't have much experience with JS Promises? Well,
it turns out we didnt have to know the differences between a jQuery Promise or an
Ember Promise. The automatic nature of the Runloop catches any leaky `sync` or
`actions`. While that automation is fine, it did lead to an inefficient Runloop
with some weird code.

```js
App.CneCarouselComponent = Ember.Component.extend({
  enableControls: false,
  setUpCarousel: function() {
    var component = this;
    var items = this.get('items');
    this.set('content', items);

    // Enable controls on next tick?
    Ember.run(function() {
      // later?
      Ember.run(function() {
        component.set('enableControls', true);
      }
    });
  }.on('init')
});
```

By not embracing the Runloop, we were at the mercy of deferring callbacks into the
Runloop instead of actually queuing them into the proper queue. This meant that
trying to figure out when to show or hide Carousel controls was something that
sometimes worked without much understanding. Once we had a deeper understanding
of the Runloop, we were able to be explicit about when things should be rendered
and exactly what Runloop queue should be used.

```js
App.CneCarouselComponent = Ember.Component.extend({
  enableControls: false,
  setUpCarousel: function() {
    var component = this;
    var items = this.get('items');
    this.set('content', items);

    // Explicitly render controls after the carousel has rendered. Much better.
    Ember.run.schedule('afterRender', function() {
      component.set('enableControls', true);
    });
  }.on('init')
});
```

Going back to that leaky code I mentioned earlier, `sync` and `action` queues are
fired whenever a bound property updates, or an action is triggered in the
application. So when we made API requests through our own abstraction layer and
updated properties on a successful callback, we would leak out of the `sync` queue.

```js
App.CneSubscribeController = Ember.Controller.extend({
  actions: {
    submitUser: function() {
      var controller = this;
      App.ApiRequest({
        url: '/path/to/subscribe-endpoint',
        data: {
          foo: 'bar',
          baz: 'bat'
        },
        onSuccess: function() {
          // Leaking out of the Runloop
          controller.set('userSubscribedSuccessfully', true);
        },
        onError: function() {}
      });
    }
  }
});
```

To prevent leaks we just wrapped any code that would belong in a `sync` queue with
an arbitrary `Ember.run()`.

```js
App.CneSubscribeController = Ember.Controller.extend({
  actions: {
    submitUser: function() {
      var controller = this;
      App.ApiRequest({
        url: '/path/to/subscribe-endpoint',
        data: {
          foo: 'bar',
          baz: 'bat'
        },
        onSuccess: function() {
          // Let's make sure that we get execute within a queue!
          Ember.run(function() {
            controller.set('userSubscribedSuccessfully', true);
          });
        },
        onError: function() {}
      });
    }
  }
});
```

With a better understanding of how Promises work within the Runloop, we were able
to refactor our API request abstraction to use Ember Promises and remove any arbitrary
`Ember.run()` calls within our code.

```js
App.CneSubscribeController = Ember.Controller.extend({
  actions: {
    submitUser: function() {
      var controller = this;
      App.ApiRequest({
        url: '/path/to/subscribe-endpoint',
        data: {
          foo: 'bar',
          baz: 'bat'
        }
      }).then(function() {
        // Happens within the Runloop without needing to wrap it in an Ember.run()
        controller.set('userSubscribedSuccessfully', true);
      });
    }
  }
});
```
