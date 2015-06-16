def sh(command)
  `#{command}`
end

def update_coffee(file)
  target = "#{file}"
  puts "#{target} was updated"
  sh "coffee -m --output js --compile #{target}"
end

def update_scss(file)
  target = "#{file}"

  if target.start_with? '.sass-cache'
    return
  end

  # filename = target.split('/').last
  # outname = target.split('.').first + '.css'
  puts "#{target} was updated"
  sh "sass --scss --update scss:css"
end

guard :shell do
  watch(/.+\.coffee/) { |m| update_coffee(m[0]) }
  watch(/.+\.scss/) { |m| update_scss(m[0]) }
end