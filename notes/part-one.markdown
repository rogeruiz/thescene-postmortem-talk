### A postmortem of _The Scene_

![The Scene](https://www.dropbox.com/s/44zc28b7ukj6l29/the_scene_logo_2x_hover.png?dl=1)

We started in February of 2014. We were on a fresh version of Ember, 1.4.0. We
set out to learn Ember "the right way". Which is very hard. Convention instead
of configuration is great, but we didn't have any Ember-specific conventions under
our belt. We were unsure of how Promises worked, mistaking a jQuery Promise for
an RSVP Promise.

_The Scene_ is built on Rails serving up the Ember application. We expected to be
able to serve up a lot of preloaded data, and have payloads ready to be consumed
by the Ember-side on initial load of the application. We didn't use Ember App kit,
and Ember-CLI was a Broccoli pipe dream.

### The paradox of choice

![Choose](https://dl.dropbox.com/s/ztl55nqm92yib9k/2014-05-28%2008.20.33.gif)

By the time we launched our application in June, we had tried _many_ different
approaches. We launched with Ember 1.7.0.beta1.canary. We needed `queryParams`,
and had been comfortable with the moving target of having to fix deprecations
between minor updates.

### You can do the thing

![Potato](https://dl.dropboxusercontent.com/s/psviupoznb3fmx0/tiny-potato.jpg)

In the beginning, we were easily overwhelmed with the multiple ways to configure
our Ember application. We hedged our bets first with components, then views and
view helpers, then rendered outlets. We learned getting properties directly from
controllers, model and content properties on controllers, all while getting
acclimated to the "best way", "the Ember way".

### Enough politics, let's build it

![Building the Future](https://www.dropbox.com/s/edfoj2iaxlfhuf1/2014-06-30%2010.39.01.gif?dl=1)

We ultimately found that building the application on our own conventions would be
the sanest approach to building _The Scene_.
