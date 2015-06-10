(function(){

  importJS('js/sprintf.js');

  var $editor;
  var $selected = null;
  var resizeTimer = false;

  function millis(){
    return new Date().getTime();
  }

  function refresh(){
    var w = $editor.width();
    $editor.height(w);
  }

  // セルがクリックされたとき
  function cellClicked(cell,x,y){
    var $cell = $(cell);
    if($selected != null){
      $selected.removeClass('selected');
    }

    $selected = $cell;
    $cell.addClass('selected');
  }

  // 画面のリサイズが終了した時点で行う処理
  function windowResized(){ 
    refresh();
  }

  // 初期化処理
  function initialize(){
    $editor = $('#editor');
    refresh();

    // リサイズ処理
    // see http://www.webdesignleaves.com/wp/jquery/577/
    $(window).resize(function() {
      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(function() {
        windowResized();
      }, 200);
    });

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

    // clickだとiPhoneで300ms遅延がある
    // see http://text.moroya.net/entry/2013/05/06/122013
    $editor.on('touchstart click', function(e){

      // セルが背面にありクリックできないので、座標から探索

      e.preventDefault();

      var info = (e.type == 'touchstart')? e.originalEvent.touches[0] : e;
      var offset = $editor.offset();
      var w = $editor.width();
      var w_9 = w/9;
      var px = info.pageX - offset.left;
      var py = info.pageY - offset.top;
      var x = Math.floor(px / w_9);
      var y = Math.floor(py / w_9);

      // printf("{x}, {y}", {x: x, y: y});

      var target = document.getElementById('c'+(x + y*9));
      cellClicked(target,x,y);

      // return false;
    });
  }

  // ===================

  jQuery(function($){
    initialize();
  });

})();