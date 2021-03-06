// Generated by CoffeeScript 1.6.3
(function() {
  var Board, Game, Jewel, Screens, Settings,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Game = (function() {
    function Game() {}

    Game.prototype.showScreen = function(screenId) {
      var screen;
      screen = $("#" + screenId);
      $('.active').removeClass('active');
      screen.attr('class', 'screen active');
      return screenId + ' active';
    };

    return Game;

  })();

  Screens = (function() {
    function Screens() {
      this.setup = __bind(this.setup, this);
    }

    Screens.prototype.firstRun = true;

    Screens.prototype.setup = function() {
      $('#splash-screen').click(function() {
        console.log('click splash screen');
        return jewel.screens.run();
      });
      return $('#main-menu li').click(function(e) {
        var action;
        action = $(e.target).attr('name');
        return jewel.game.showScreen(action);
      });
    };

    Screens.prototype.run = function() {
      if (this.firstRun) {
        console.log('run');
        this.firstRun = false;
        return jewel.game.showScreen('main-menu');
      }
    };

    return Screens;

  })();

  Settings = (function() {
    function Settings() {}

    Settings.prototype.rows = 8;

    Settings.prototype.cols = 8;

    Settings.prototype.baseScore = 100;

    Settings.prototype.numJewelTypes = 7;

    return Settings;

  })();

  Board = (function() {
    function Board() {}

    Board.prototype.settings = '';

    Board.prototype.jewels = '';

    Board.prototype.cols = '';

    Board.prototype.rows = '';

    Board.prototype.baseScore = '';

    Board.prototype.numJewelTypes = '';

    Board.prototype.initialize = function() {
      this.settings = jewel.settings;
      this.numJewelTypes = this.settings.numJewelTypes;
      this.baseScore = this.settings.baseScore;
      this.cols = this.settings.cols;
      return this.rows = this.settings.rows;
    };

    Board.prototype.print = function() {
      return console.log('print');
    };

    Board.prototype.randomJewel = function() {
      return Math.floor(Math.random() * this.numJewelTypes);
    };

    Board.prototype.fillBoard = function() {
      var type, x, y, _i, _ref, _results;
      ({
        x: 0,
        y: 0
      });
      this.jewels = [];
      _results = [];
      for (x = _i = 0, _ref = this.cols - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
        this.jewels[x] = [];
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (y = _j = 0, _ref1 = this.rows - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
            type = this.randomJewel();
            _results1.push(this.jewels[x][y] = type);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    return Board;

  })();

  Jewel = (function() {
    function Jewel() {}

    Jewel.prototype.game = new Game;

    Jewel.prototype.screens = new Screens;

    Jewel.prototype.settings = new Settings;

    Jewel.prototype.board = new Board;

    return Jewel;

  })();

  this.jewel = new Jewel;

  jewel.screens.setup();

  jewel.board.initialize();

  jewel.board.fillBoard();

}).call(this);
