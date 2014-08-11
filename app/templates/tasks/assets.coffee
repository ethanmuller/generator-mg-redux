module.exports = (gulp, cfg, env) ->

  gulp.task 'assets', ->
    gulp.src(cfg.paths.assets + "**/*")
    .pipe(gulp.dest(cfg.paths.dest))
