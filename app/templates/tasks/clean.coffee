module.exports = (gulp, cfg, env) ->
  del = require 'del'

  gulp.task 'clean', (cb) ->
    del cfg.paths.dest, cb

  gulp.task 'clean-scripts', (cb) ->
    del cfg.paths.scriptsOut, (cb)

  gulp.task 'clean-styles', (cb) ->
    del cfg.paths.stylesOut, cb

  gulp.task 'clean-vendor', (cb) ->
    del cfg.paths.vendorOut, cb

