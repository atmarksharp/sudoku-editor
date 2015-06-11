(function(){
  window.Preload = {};

  Preload.preloadImage = function(path){
    var img = document.createElement('img');
    img.setAttribute('src', path);
  }

  Preload.preloadImages = function(pathList){
    for (var i = 0; i < pathList.length; i++) {
      preloadImage(pathList[i]);
    };
  }
})();