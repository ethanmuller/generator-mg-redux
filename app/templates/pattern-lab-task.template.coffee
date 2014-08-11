module.exports = (gulp, cfg, env) ->
  exec = require('child_process').exec
  ncp = require('ncp').ncp
  fs = require 'fs'

  fileExists = (file) ->
    try
      fs.lstatSync file
      return true
    catch e
      return false

  gulp.task 'pattern-lab', ->
    # pattern lab freaks out if there is no build directory.
    # let's create one if it's not there.
    fs.mkdir cfg.paths.dest unless fileExists cfg.paths.dest

    # Handle styleguide
    unless fileExists 'build/styleguide/'
      # copy styleguide from patternlab's core
      ncp 'lib/patternlab-php/core/styleguide', 'build/styleguide'

    # Run pattern lab to generate patterns
    exec 'php lib/patternlab-php/core/builder.php -gp'
