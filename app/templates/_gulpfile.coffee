gulp = require "gulp"
_ = require "lodash"
runSequence = require "run-sequence"
requireDir = require "require-dir"

config = require "./config.coffee"

# Load all tasks
tasks = requireDir "tasks/"

# Get environment, for environment-specific activities
env = process.env.NODE_ENV or "development"

# Loop through all tasks and create them
_.each tasks, (task) ->
  task(gulp, config, env)

# The "default" and "build" tasks will be your most commonly-used tasks from
# the CLI.  The more granular tasks are in "tasks/"

gulp.task "build", (callback) ->
  # runSequence is a gulp plugin that is a little bit of a hack.  It lets us
  # define synchronous tasks without requiring that task to be a dependency. 
  # To add more async tasks, add them to the array.
  runSequence(
    'clean'
    'assets'
    [
      'bower-files'
      'scripts'
      'styles'
      'pattern-lab'
    ]
    callback
  )

gulp.task "default", (callback) ->
  runSequence ['watch', 'server', 'build'], callback
