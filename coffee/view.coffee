@View = {}
View.$editor = null

# 画像をプリロード
View.preloadImages = ->
  i = 0
  while i < 9
    n = i + 1
    Preload.preloadImage 'img/number/b' + n + '.png'
    Preload.preloadImage 'img/number/br' + n + '.png'
    Preload.preloadImage 'img/number/bb' + n + '.png'
    i++
  return

# ビューのサイズをウィンドウに合わせる
View.resizeEditor = ($editor) ->
  w = $editor.width()
  $editor.height w
  return

View.initEditor = ($editor) ->
  @$editor = $editor
  View.resizeEditor $editor

  # セルの配置
  # see http://jsperf.com/innerhtml-vs-addattribute-later
  container = document.getElementById('cell_container')
  y = 0
  while y < 9
          x = 0
    while x < 9
      cell = document.createElement('div')
      cell.setAttribute 'id', 'c' + x + y * 9
      cell.setAttribute 'class', 'cell x' + x + ' y' + y
      cell.setAttribute 'data-pos', '' + x + y * 9
      container.appendChild cell
      x++
    y++
  return
