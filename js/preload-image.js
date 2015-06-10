(function(){
  window.preloadImage = function(path){
    var img = document.createElement('img');
    img.setAttribute('src', path);
  }

  window.preloadImages = function(pathList){
    for (var i = 0; i < pathList.length; i++) {
      preloadImage(pathList[i]);
    };
  }
})();