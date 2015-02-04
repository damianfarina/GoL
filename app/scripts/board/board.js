(function(global){
  'use strict';

  global.Board = (function(Cell) {

    var _cellMap = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    /*jshint validthis:true */

    function Board() {
      this.matrix = _initializeMatrix(_cellMap.length, _cellMap[0].length);
      this.clone = clone;
      this.initializeCells = initializeCells.bind(this);

      this._getCellNeighbours = _getCellNeighbours;
      this._initializeMatrix = _initializeMatrix;
    }

    return Board;

    /////////////////////////

    function clone() {
      var newBoard = new global.Board(),
        rowIndex = 0,
        colIndex = 0;

      if (this.matrix.length) {
        newBoard.matrix = [];
        for (rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
          newBoard.matrix[rowIndex] = [];
          for (colIndex = 0; colIndex < this.matrix[0].length; colIndex++) {
            newBoard.matrix[rowIndex][colIndex] = this.matrix[rowIndex][colIndex].clone();
          }
        }
      }

      return newBoard;
    }

    function _isCellAlive(rowIndex, colIndex) {
      return !!_cellMap[rowIndex][colIndex];
    }

    function _getCellNeighbours(cellRowIndex, cellColIndex) {
      var rowIndexes = [cellRowIndex - 1, cellRowIndex, cellRowIndex + 1],
        colIndexes = [cellColIndex - 1, cellColIndex, cellColIndex + 1],
        neighbours = [];

      if (rowIndexes[0] < 0) {
        rowIndexes[0] = this.matrix.length - 1;
      }

      if (rowIndexes[2] >= this.matrix.length) {
        rowIndexes[2] = 0;
      }

      if (colIndexes[0] < 0) {
        colIndexes[0] = this.matrix[0].length - 1;
      }

      if (colIndexes[2] >= this.matrix[0].length) {
        colIndexes[2] = 0;
      }

      neighbours.push(this.matrix[rowIndexes[0]][colIndexes[0]]);
      neighbours.push(this.matrix[rowIndexes[0]][colIndexes[1]]);
      neighbours.push(this.matrix[rowIndexes[0]][colIndexes[2]]);
      neighbours.push(this.matrix[rowIndexes[1]][colIndexes[0]]);
      neighbours.push(this.matrix[rowIndexes[1]][colIndexes[2]]);
      neighbours.push(this.matrix[rowIndexes[2]][colIndexes[0]]);
      neighbours.push(this.matrix[rowIndexes[2]][colIndexes[1]]);
      neighbours.push(this.matrix[rowIndexes[2]][colIndexes[2]]);

      return neighbours;
    }

    function initializeCells() {
      var rowIndex,
        colIndex,
        rowsCount,
        colsCount;

      rowsCount = this.matrix.length;
      colsCount = this.matrix[0].length;
      for (rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        for (colIndex = 0; colIndex < colsCount; colIndex++) {
          this.matrix[rowIndex][colIndex].isAlive = _isCellAlive(rowIndex, colIndex);
          this.matrix[rowIndex][colIndex].neighbours = _getCellNeighbours.call(this, rowIndex, colIndex);
        }
      }
    }

    function _initializeMatrix(rowsCount, colsCount) {
      var rowIndex,
        colIndex,
        matrix = [];

      for (rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        matrix[rowIndex] = [];
        for (colIndex = 0; colIndex < colsCount; colIndex++) {
          matrix[rowIndex][colIndex] = new Cell([], rowIndex, colIndex, false);
        }
      }

      return matrix;
    }
  })(global.Cell);

})(window);
