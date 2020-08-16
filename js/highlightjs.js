/**
 * @file
 * Initialise highlight.js.
 */

(function($) {

Backdrop.behaviors.highlightjs = {
  attach: function(context, settings) {

    $(Backdrop.settings.highlightjs.tags).each(function(i, block) {
      hljs.highlightBlock(block);
    });

  }
};

})(jQuery);

