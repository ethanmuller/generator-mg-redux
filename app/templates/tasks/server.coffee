module.exports = (gulp, cfg, env) ->
  connect = require 'gulp-connect'

  gulp.task 'server', ->
    connect.server
      root: cfg.paths.dest
      livereload: true
