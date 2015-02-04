(function(global){
  'use strict';

  global.Runner = (function(GameLooper, GameRuler) {
    var service = {
      run: run
    };

    return service;

    /////////////////////////

    function run(board, renderer) {
      renderer.render(board);
      GameLooper.loop(function() {
        board = GameRuler.calculateNext(board)
        renderer.render(board);
      });
    }
  })(global.GameLooper, global.GameRuler);

})(window);
