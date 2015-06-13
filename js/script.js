(function(){
  
  importJS('js/sprintf.js');
  importJS('js/preload-image.js');
  importJS('js/model.js');
  importJS('js/view.js');
  importJS('js/event.js');

  var $editor = null;

  // 初期化処理
  function initialize(){
    $editor = $('#editor');
    View.initEditor($editor)
    Event.initialize($editor);
  }

  // ===================

  jQuery(function($){
    View.preloadImages();
    initialize();
  });

})();