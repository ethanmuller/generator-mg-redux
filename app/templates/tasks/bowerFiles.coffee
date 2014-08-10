module.exports = (gulp, cfg, env) ->
  concat = require 'gulp-concat'
  uglify = require 'gulp-uglify'
  gulpif = require 'gulp-if'
  bowerFiles = require 'main-bower-files'

  try
    gulp.task 'bower-files', ['clean-vendor'], ->
      gulp.src(bowerFiles().concat(cfg.paths.vendorIn))
        .pipe(concat('vendor.js'))
        .pipe(gulpif((env is 'production'), uglify()))
        .pipe gulp.dest(cfg.paths.vendorOut)
