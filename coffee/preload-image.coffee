@Preload = {}

Preload.preloadImage = (path) ->
  img = document.createElement('img')
  img.setAttribute 'src', path
  return

Preload.preloadImages = (pathList) ->
  i = 0
  while i < pathList.length
    preloadImage pathList[i]
    i++
  return

return