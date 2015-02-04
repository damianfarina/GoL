(function(global){
  'use strict';

  global.GameLooper = (function() {
    var service = {
      loop: loop
    };

    return service;

    /////////////////////////

    function loop(loopStep) {
      setInterval(loopStep, 100);
    }
  })();

})(window);
