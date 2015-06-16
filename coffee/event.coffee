class Event
  @$editor = null
  @$selected = null
  @resizeTimer = false

  # セルがクリックされたとき
  @cellClicked: (cell, x, y) ->
    # console.log "x:#{x}, y:#{y}"

    $cell = $(cell)
    if @$selected != null
      @$selected.removeClass 'selected'
    @$selected = $cell
    $cell.addClass 'selected'
    return

  # 画面のリサイズが終了した時点で行う処理
  @windowResized: ->
    View.resizeEditor @$editor
    return

  @initialize: ($editor) ->
    @$editor = $editor

    # リサイズ処理
    # see http://www.webdesignleaves.com/wp/jquery/577/
    $(window).resize ->
      if resizeTimer != false
        clearTimeout resizeTimer
      resizeTimer = setTimeout((->
        self.windowResized()
        return
      ), 200)
      return

    # clickだとiPhoneで300ms遅延がある
    # see http://text.moroya.net/entry/2013/05/06/122013
    self = @
    $editor.on 'tap click', (e) ->

      # セルが背面にありクリックできないので、座標から探索
      e.preventDefault()
      offset = $editor.offset()
      w = $editor.width()
      w_9 = w / 9
      pageX = if e.type == 'tap' then e.x else e.pageX
      pageY = if e.type == 'tap' then e.y else e.pageY
      px = pageX - (offset.left)
      py = pageY - (offset.top)
      x = Math.floor(px / w_9)
      y = Math.floor(py / w_9)

      # console.log("#{x}, #{y}")
      target = document.getElementById("c#{x + y*9}")
      self.cellClicked target, x, y

      # return false;
      return
    return

@Event = Event
