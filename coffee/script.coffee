do ->
  importJS 'js/preload-image.js'
  importJS 'js/model.js'
  importJS 'js/view.js'
  importJS 'js/event.js'
  @$editor = null
  return

# 初期化処理
initialize = ->
  $editor = $('#editor')
  View.initEditor $editor
  Event.initialize $editor
  return

# ===================
jQuery ->
  # View.preloadImages()
  initialize()
  return