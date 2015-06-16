// Generated by CoffeeScript 1.8.0
(function() {
  var Event;

  Event = (function() {
    function Event() {}

    Event.$editor = null;

    Event.$selected = null;

    Event.resizeTimer = false;

    Event.cellClicked = function(cell, x, y) {
      var $cell;
      $cell = $(cell);
      if (this.$selected !== null) {
        this.$selected.removeClass('selected');
      }
      this.$selected = $cell;
      this.$selected.html('<img src="img/number/b' + (x + 1) + '.png" style="width:100%;height:100%;"/>');
      $cell.addClass('selected');
    };

    Event.windowResized = function() {
      View.resizeEditor(this.$editor);
    };

    Event.initialize = function($editor) {
      var self;
      this.$editor = $editor;
      $(window).resize(function() {
        var resizeTimer;
        if (resizeTimer !== false) {
          clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout((function() {
          self.windowResized();
        }), 200);
      });
      self = this;
      $editor.on('tap click', function(e) {
        var offset, pageX, pageY, px, py, target, w, w_9, x, y;
        e.preventDefault();
        offset = $editor.offset();
        w = $editor.width();
        w_9 = w / 9;
        pageX = e.type === 'tap' ? e.x : e.pageX;
        pageY = e.type === 'tap' ? e.y : e.pageY;
        px = pageX - offset.left;
        py = pageY - offset.top;
        x = Math.floor(px / w_9);
        y = Math.floor(py / w_9);
        target = document.getElementById("c" + (x + y * 9));
        self.cellClicked(target, x, y);
      });
    };

    return Event;

  })();

  this.Event = Event;

}).call(this);

//# sourceMappingURL=event.js.map
