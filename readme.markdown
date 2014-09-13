The Scene Postmortem or: How we learned to stop worrying & love the Runloop
===

A talk in two parts by Scott Norvell and Roger Steve Ruiz

### Installing dependencies

This talk uses Bower to manage it's front-end dependencies. So please use Bower.

If you don't have it installed; do this:
```bash
npm install --global bower
```

Once Bower is installed; do this:
```bash
cd ~/projectDir/thescene-postmortem-talk
bower install
```

Now point your favorite web server and/or browser to `talk/index.html`
```bash
# an example using Python
python -m SimpleHTTPServer
```

The talk is available at: [http://localhost:8000/talk](http://localhost:8000/talk)

### Contributing

All notes for the talk should be added to the `notes` directory. Make sure to
include a link to the note on the `readme.markdown` file in the `notes` directory.

---
##### Colophon

This talk will be given at the EmberNYC Meetup on September 25th, 2014

<img src="https://c11f499479417afc9b5c59116d33164133932727-www.googledrive.com/host/0B0OzG0v4De_3aVg3V3oyNVpDaEU/ScottNorvell.jpg" alt="Headshot" width="50" height="50">
<br>
Scott Norvell <scott@cnevids.com>

<img src="https://c11f499479417afc9b5c59116d33164133932727-www.googledrive.com/host/0B0OzG0v4De_3aVg3V3oyNVpDaEU/RogerRuiz.jpg" alt="Headshot" width="50" height="50">
<br>
Roger Steve Ruiz <roger@cnevids.com>

Special thanks and appreciation:

* [jQuery](http://jquery.com)
* [Ember](http://emberjs.com)
* [Bower](http://bower.io)
* [BespokeJS](http://markdalgleish.com/projects/bespoke.js/)
* [The Scene](http://thescene.com)

Built with ♥︎ at [Condé Nast Entertainment](http://www.condenast.com/brands/conde-nast-entertainment)
