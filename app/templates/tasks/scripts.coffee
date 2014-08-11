module.exports = (gulp, cfg, env) ->
  coffee = require "gulp-coffee"
  concat = require "gulp-concat"
  uglify = require "gulp-uglify"
  sourcemaps = require "gulp-sourcemaps"
  gulpif = require "gulp-if"
  errorHandler = require '../lib/error-handler'
  plumber = require 'gulp-plumber'

  gulp.task "scripts", ['clean-scripts'], ->
    # Minify and copy all JavaScript (except vendor scripts)
    # with sourcemaps all the way down
    stream = gulp.src(cfg.paths.scriptsIn + '**/*.coffee')
      .pipe plumber(errorHandler: errorHandler.error)
      .pipe coffee()
      .pipe concat("all.js")
      .pipe gulpif((env is 'production'), uglify())
      .pipe gulp.dest(cfg.paths.scriptsOut)
