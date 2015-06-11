(function(){

  window.Event = {};

  Event.$editor = null;
  Event.$selected = null;

  // セルがクリックされたとき
  Event.cellClicked = function(cell,x,y){
    var $cell = $(cell);
    if(this.$selected != null){
      this.$selected.removeClass('selected');
      // $selected.html(''); // only for test
    }

    this.$selected = $cell;
    this.$selected.html('<img src="img/number/b'+(x+1)+'.png" style="width:100%;height:100%;"/>');  // only for test
    $cell.addClass('selected');
  }

  // 画面のリサイズが終了した時点で行う処理
  Event.windowResized = function(){ 
    View.resizeEditor($editor);
  }


  Event.initialize = function($editor){
    this.$editor = $editor;

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


    // clickだとiPhoneで300ms遅延がある
    // see http://text.moroya.net/entry/2013/05/06/122013
    $editor.on('tap click', function(e){

      // セルが背面にありクリックできないので、座標から探索
      e.preventDefault();

      var offset = $editor.offset();
      var w = $editor.width();
      var w_9 = w/9;
      var pageX = (e.type === 'tap')? e.x : e.pageX;
      var pageY = (e.type === 'tap')? e.y : e.pageY;
      var px = pageX - offset.left;
      var py = pageY - offset.top;
      var x = Math.floor(px / w_9);
      var y = Math.floor(py / w_9);

      // printf("#{x}, #{y}", {x: x, y: y});

      var target = document.getElementById('c'+(x + y*9));
      Event.cellClicked(target,x,y);

      // return false;
    });
  }

})();