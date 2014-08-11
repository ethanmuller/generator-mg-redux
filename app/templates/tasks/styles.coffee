module.exports = (gulp, cfg, env) ->
  plumber = require 'gulp-plumber'
  errorHandler = require '../lib/error-handler'
  sass = require 'gulp-sass'
  minifyCSS = require 'gulp-minify-css'
  gulpif = require 'gulp-if'

  gulp.task "styles", ->
    stream = gulp.src(cfg.paths.stylesIn + '**/*.scss')
      .pipe plumber errorHandler: errorHandler.error
      .pipe sass
        includePaths: require('node-bourbon').includePaths
      .pipe gulp.dest cfg.paths.stylesOut
