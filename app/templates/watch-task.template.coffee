module.exports = (gulp, cfg, env) ->

  gulp.task 'watch', ->
    gulp.watch(cfg.paths.assets + '**/*', ['build'])
    gulp.watch(cfg.paths.scriptsIn + '**/*.coffee', ['scripts'])
    gulp.watch(cfg.paths.stylesIn + '**/*.scss', ['styles'])
    gulp.watch('tests/**/*', ['tests'])
    <%= includePatternLab ? "gulp.watch(cfg.paths.patterns, ['pattern-lab'])" : null %>

    # This doesn't seem to be picking up on bower installs.
    gulp.watch(cfg.paths.vendorIn, ['vendor'])

