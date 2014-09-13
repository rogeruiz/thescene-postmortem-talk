;(function(global) {

  // Let's set and hoist our variables. Sure, they're already on the
  // window object, but now they're here too. Overkill? Nahhhh...
  var $ = global.jQuery;

  // Bespoke and it's plugins
  // Bespoke documentation can be found here:
  // https://github.com/markdalgleish/bespoke.js
  var bespoke = global.bespoke;
  var touch = bespoke.plugins.touch;
  var scale = bespoke.plugins.scale;
  var backdrop = bespoke.plugins.backdrop;
  var loop = bespoke.plugins.loop;
  var progress = bespoke.plugins.progress;
  var keys = bespoke.plugins.keys;
  var classes = bespoke.plugins.classes;
  var hash = bespoke.plugins.hash;
  var state = bespoke.plugins.state;

  $(function() {
    // Hey there, Dom. You ready?

    var bespokePlugins = [
      touch(),
      scale(),
      backdrop(),
      loop(),
      progress(),
      keys(),
      classes(),
      hash(),
      state()
    ];

    // Let's talk!
    var $talk = $('#talk');
    var presentation = bespoke.from($talk[0], bespokePlugins);

    // Feel free to delete—and add more behaviors after—this line.
  });

})(window);
