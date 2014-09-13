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
# an example
python -m SimpleHTTPServer
```

The talk is available at http://localhost:8000/talk

### Contributing

All notes for the talk should be added to the `notes` directory. Make sure to
include a link to the note on the `readme.markdown` file in the `notes` directory.

##### Colophon

This talk will be given at EmberNYC Meetup on September 25th, 2014

Scott Norvell <scott@cnevids.com>

Roger Steve Ruiz <roger@cnevids.com>

Special thanks and appreciation:

* jQuery
* Ember
* Bower
* BespokeJS

---
Built with ♥︎ at Condé Nast Entertainment
