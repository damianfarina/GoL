(function(global){
  'use strict';

  global.ThirdRuler = (function() {
    var service = {
      apply: apply
    };

    return service;

    /////////////////////////

    /**
     * Apply rule
     *   Will return false if not applicable
     *   Will change cell state and return true if applicable
     */
    function apply(cell) {
      var aliveNeighbours;

      if (!cell.isAlive) {
        return false;
      }

      aliveNeighbours = cell.aliveNeighbours().length;
      if (aliveNeighbours <= 3) {
        return false;
      }

      cell.isAlive = false;
      return true;
    }
  })();

})(window);
