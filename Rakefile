@threads = {}

def watch_command(command, name)
  @threads[name] = Thread.start do
    while true
      begin
        sh command
      rescue
        next
      end

      break
    end
  end
end

def watch_coffee
  watch_command "coffee -mw --output js --compile coffee", "coffee"
end

def watch_scss
  # watch_command "sass --scss --watch scss:css"
  sh "sass --scss --watch scss:css"
end


task :watch do
  watch_coffee
  watch_scss

  threads.each do |th|
    Thread::stop(th)
  end
end