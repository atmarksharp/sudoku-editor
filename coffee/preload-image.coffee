class Preload
  @preloadImage: (path) ->
    img = document.createElement('img')
    img.setAttribute 'src', path
    return

  @preloadImages: (path) -> (pathList) ->
    i = 0
    while i < pathList.length
      preloadImage pathList[i]
      i++
    return

@Preload = Preload