(function(global) {
  'use strict';

  global.BoardRenderer = (function() {
    var service = {
      render: render
    };

    return service;

    /////////////////////////

    function render(board) {
      var canvas = document.getElementById('board');
      var table = document.createElement('table');
      var tr, td;
      canvas.innerHTML = "";
      table.cellPadding = 0;
      table.cellSpacing = 0;
      for (var i = 0; i < board.matrix.length; i++) {
        tr = document.createElement('tr');
        for (var j = 0; j < board.matrix[0].length; j++) {
          td = document.createElement('td');
          td.style.width = 20;
          td.style.height = 20;
          if (board.matrix[i][j].isAlive) {
            td.innerHTML = 1;
            td.style.backgroundColor = 'black';
          }
          else {
            td.innerHTML = 1;
            td.style.backgroundColor = '#ccc';
            td.style.color = '#ccc';
          }
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      canvas.appendChild(table);
    }
  })();

})(window);
