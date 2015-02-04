(function(global){
  'use strict';

  global.NeighboursCalculator = (function() {
    var service = {
      calculate: calculate
    };

    return service;

    /////////////////////////

    function calculate(cell, board, rowIndex, colIndex) {
      var rowIndexes = [rowIndex - 1, rowIndex, rowIndex + 2],
        colIndexes = [colIndex - 1, colIndex, colIndex + 1];

      if (rowIndexes[0] < 0) {
        rowIndexes[0] = board.matrix.length - 1;
      }

      if (rowIndexes[2] > board.matrix.length) {
        rowIndexes[2] = 0;
      }

      if (colIndexes[0] < 0) {
        colIndexes[0] = board.matrix[0].length - 1;
      }

      if (colIndexes[2] > board.matrix[0].length) {
        colIndexes[2] = 0;
      }
      debugger;

      cell.neighbours.push(board.matrix[rowIndexes[0]][colIndexes[0]]);
      cell.neighbours.push(board.matrix[rowIndexes[0]][colIndexes[1]]);
      cell.neighbours.push(board.matrix[rowIndexes[0]][colIndexes[2]]);
      cell.neighbours.push(board.matrix[rowIndexes[1]][colIndexes[0]]);
      cell.neighbours.push(board.matrix[rowIndexes[1]][colIndexes[2]]);
      cell.neighbours.push(board.matrix[rowIndexes[2]][colIndexes[0]]);
      cell.neighbours.push(board.matrix[rowIndexes[2]][colIndexes[1]]);
      cell.neighbours.push(board.matrix[rowIndexes[2]][colIndexes[2]]);
    }
  })();

})(window);
