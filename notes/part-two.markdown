### Build now, optimize later

![Hack the planet](https://www.dropbox.com/s/waz91ks1ppagj06/2014-05-12%2023.01.09.gif?dl=1)

We had multiple entry points into how to best build the app. We searched Google,
scoured Stack Overflow, and used the Ember Guides and API documentation. We
leveraged our experience building web applications. We used Emblem at first and
abandoned it for Handlebars after realizing it was too much work to maintain. We
use Coffeescript for most of our files, slowly refactoring back to vanilla Javascript.
We find it's easier to lookup, parse, and use community feedback found online if
we just use Handlebars and Javascript.

### Optimize all the things

* Preloading data server-side
  * Injecting it into a Custom Data Store on load
* Preloading API calls in a key/value store
  * Making API calls stick around for a bit, storing their responses in a POJO
* Nginx caching and API caching
  * We managed to get our API response time down to 10ms in production
* Prefetch data while application idling
  * When the application is idle, meaning not fetching data, a prefetch would
    gather content up from all the potential links in the current view.
* Separating "stale" from "fresh" content.
  * Channels & Genres vs. Videos & Series expecting them in the application under
    different circumstances

### An inconvenient truth

![All that for nothing](https://www.dropbox.com/s/3tscarnokoy60of/2014-06-15%2016.47.19.gif?dl=1)

With all these optimizations, why was our application slow? Our initial load time
to render was eight to nine seconds. Once the site was displayed, it was fast. But
that initial load time was terrible. We treated every part of the application equally
without separating many of the visible parts form the invisible parts. Not to mention
that we also had very little experience with Javascript Promises.

### When you have a hammer, everything looks like a nail

Our hammer was Javascript with a healthy mix of Ruby, and Ember was the jackhammer.
We wrote Mixins, when we should have written Service & Initializers. We deeply
nested Views when we should have build application-specific components. We believed
all parts of the view were equally important, whether they were visible or not.
We weren't leveraging our Handlebar templates to prevent loading of content and
to load it after certain conditions were met.
