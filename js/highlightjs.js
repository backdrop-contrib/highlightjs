/**
 * @file
 * Initialise highlight.js.
 */

(function($) {

Backdrop.behaviors.highlightjs = {
  attach: function(context, settings) {

    hljs.initHighlightingOnLoad();

  }
};

})(jQuery);

