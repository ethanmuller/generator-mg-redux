module.exports = (gulp, cfg, env) ->
  connect = require 'gulp-connect'

  gulp.task 'assets', ->
    gulp.src(cfg.paths.assets + "**/*")
    .pipe(gulp.dest(cfg.paths.dest))
    .pipe(connect.reload())
