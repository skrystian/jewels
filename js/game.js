// Generated by CoffeeScript 1.6.3
(function() {
  var game;

  ({
    jewel: game = function() {
      var $, dom, showScreen;
      dom = jewel.dom;
      $ = dom.$;
      showScreen = function(screenId) {
        var activeScreen, screen;
        activeScreen = $("#game .screen.active")[0];
        screen = $("#" + screenID)[0];
        if (activeScreen) {
          dom.removeClass(screen, "active");
        }
        return dom.addClass(screen, "active");
      };
      return {
        showScreen: showScreen
      };
    }
  });

}).call(this);
