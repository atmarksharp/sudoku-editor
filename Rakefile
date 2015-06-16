COFFEE_CM = "coffee -m --output js --compile coffee"
SASS_CM = "sass --scss --update scss:css"

def clean
  sh "rm -rf js/*.map css/*.map"
end
  
task :build do
  clean
  sh SASS_CM
  sh COFFEE_CM
end