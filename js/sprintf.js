(function(){

  window.sprintf = function(pattern, args){
    return pattern.replace(/{([^{}]*)}/g,
      function (a, b) {
        var r = args[b];
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
  };

  window.printf = function(pattern, args){
    console.log(sprintf(pattern, args));
  }

})();