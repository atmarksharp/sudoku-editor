@sprintf = (pattern, args) ->
  pattern.replace /\#{([^{}]*)}/g, (a, b) ->
    r = args[b]
    if typeof r == 'string' or typeof r == 'number' then r else a

@printf = (pattern, args) ->
  console.log sprintf(pattern, args)
  return

return