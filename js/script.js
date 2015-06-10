(function(){

  var $editor;
  var resizeTimer = false;

  function refresh(){
    var w = $editor.width();
    $editor.height(w);
  }

  // 画面のリサイズが終了した時点で行う処理
  // http://www.webdesignleaves.com/wp/jquery/577/
  function windowResized(){ 
    refresh();
  }

  // 初期化処理
  function initialize(){
    $editor = $('#editor');
    refresh();

    // リサイズ処理
    $(window).resize(function() {
      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(function() {
        windowResized();
      }, 200);
    });

    // セルの配置
    var cells = document.getElementById('cells');
    for (var y=0; y<9; y++) {
      for (var x=0; x<9; x++) {
        var cell = document.createElement('div');
        cell.setAttribute('class','cell x'+x+' y'+y);
        cell.setAttribute('data-pos',x + y*9);
        cells.appendChild(cell);
      };
    };
  }

  // ===================

  jQuery(function($){
    initialize();
  });

})();