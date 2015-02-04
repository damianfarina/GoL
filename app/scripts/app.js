(function(global) {
  'use strict';

  global.App = (function(Board, BoardRenderer, Runner) {
    var service = {
      start: start
    };

    return service;

    /////////////////////////

    function start() {
      var board = new Board(),
        renderer = BoardRenderer;
      board.initializeCells();

      Runner.run(board, renderer);
    }
  })(global.Board, global.BoardRenderer, global.Runner);

})(window);

window.App.start();
