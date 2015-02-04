(function(global){
  'use strict';

  global.GameRuler = (function(FirstRuler, SecondRuler, ThirdRuler, FourthRuler) {
    var service = {
      calculateNext: calculateNext
    };

    return service;

    /////////////////////////

    function calculateNext(board) {
      var rowsIndex,
        colsIndex,
        cell,
        newCell,
        newBoard = board.clone(),
        rowsCount = board.matrix.length,
        colsCount = board.matrix[0].length;

      for (rowsIndex = 0; rowsIndex < rowsCount; rowsIndex++) {
        newBoard.matrix[rowsIndex] = [];
        for (colsIndex = 0; colsIndex < colsCount; colsIndex++) {
          cell = board.matrix[rowsIndex][colsIndex];
          newCell = cell.clone();
          FirstRuler.apply(newCell) ||
            SecondRuler.apply(newCell) ||
              ThirdRuler.apply(newCell) ||
                FourthRuler.apply(newCell);

          newBoard.matrix[rowsIndex][colsIndex] = newCell;
        }
      }

      for (var rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        for (var colIndex = 0; colIndex < colsCount; colIndex++) {
          newBoard.matrix[rowIndex][colIndex].neighbours = newBoard._getCellNeighbours.call(newBoard, rowIndex, colIndex);
        }
      }
      return newBoard;
    }
  })(global.FirstRuler,
    global.SecondRuler,
    global.ThirdRuler,
    global.FourthRuler);

})(window);
