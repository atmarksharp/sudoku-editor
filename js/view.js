(function(){

  window.View = {};

  View.$editor = null;

  // 画像をプリロード
  View.preloadImages = function(){
    for (var i = 0; i < 9; i++) {
      var n = i+1;
      Preload.preloadImage('img/number/b'+n+'.png');
      Preload.preloadImage('img/number/br'+n+'.png');
      Preload.preloadImage('img/number/bb'+n+'.png');
    };
  }

  // ビューのサイズをウィンドウに合わせる
  View.resizeEditor = function($editor){
    var w = $editor.width();
    $editor.height(w);
  } 

  View.initEditor = function($editor){
    this.$editor = $editor;
    View.resizeEditor($editor);

    // セルの配置
    // see http://jsperf.com/innerhtml-vs-addattribute-later
    var container = document.getElementById('cell_container');
    for (var y=0; y<9; y++) {
      for (var x=0; x<9; x++) {
        var cell = document.createElement('div');
        cell.setAttribute('id','c'+(x + y*9));
        cell.setAttribute('class','cell x'+x+' y'+y);
        cell.setAttribute('data-pos',''+(x + y*9));
        container.appendChild(cell);
      };
    };
  }

})();