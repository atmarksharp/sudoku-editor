
window.Event = {}
Event.$editor = null
Event.$selected = null
resizeTimer = false

# セルがクリックされたとき
Event.cellClicked = (cell, x, y) ->
  $cell = $(cell)
  if @$selected != null
    @$selected.removeClass 'selected'
    # $selected.html(''); // only for test
  @$selected = $cell
  @$selected.html '<img src="img/number/b' + x + 1 + '.png" style="width:100%;height:100%;"/>' # only for test
  $cell.addClass 'selected'
  return

# 画面のリサイズが終了した時点で行う処理
Event.windowResized = ->
  View.resizeEditor @$editor
  return

Event.initialize = ($editor) ->
  @$editor = $editor

  # リサイズ処理
  # see http://www.webdesignleaves.com/wp/jquery/577/
  $(window).resize ->
    if resizeTimer != false
      clearTimeout resizeTimer
    resizeTimer = setTimeout((->
      Event.windowResized()
      return
    ), 200)
    return

  # clickだとiPhoneで300ms遅延がある
  # see http://text.moroya.net/entry/2013/05/06/122013
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

    # printf("#{x}, #{y}", {x: x, y: y});
    target = document.getElementById('c' + x + y * 9)
    Event.cellClicked target, x, y

    # return false;
    return
  return
