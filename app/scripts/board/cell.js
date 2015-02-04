(function(global){
  'use strict';

  global.Cell = (function() {

    /*jshint validthis:true */


    function Cell(neighbours, rowIndex, colIndex, isAlive) {
      this.neighbours = neighbours || [];
      this.rowIndex = rowIndex;
      this.colIndex = colIndex;
      this.isAlive = isAlive;
      this.aliveNeighbours = aliveNeighbours;
      this.clone = clone;
    }

    return Cell;

    /////////////////////////

    function aliveNeighbours() {
      return this.neighbours.filter(function(neighbour) {
        return neighbour.isAlive ? true : false;
      });
    }

    function clone() {
      return new global.Cell(this.neighbours, this.rowIndex, this.colIndex, this.isAlive);
    }
  })();

})(window);
