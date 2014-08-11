#gulp-init

Very basic Gulp starter project. Coffee, SCSS, and a server with live reload.

## Requirements

- Git, obviously
- Gulp (`npm install -g gulp`)
- Bower (`npm install -g bower`)
- PHP if you're on Windows. If you're on a Mac, you already have it

## Setup

- `npm install`
- `bower install`

## Usage

To build & watch:

```
gulp
```

For a one-off build:

```
gulp build
```

The rest of the tasks live in `tasks/`, split up by file.

**All your stuff will be processed into `build/`.**

### Errors

By default, plugin errors (such as errors with Sass compilation) will cause
Gulp to halt. Errors and warnings are fatal. If you want to keep Gulp running,
use the `--fatal=off` flag. This makes development much smoother.

```
gulp                  # defaults to fatal=error
gulp --fatal=error
gulp --fatal=warning
gulp --fatal=off      # no errors should kill the build
```

**Protip:** `alias g='gulp --fatal=off'` for smooth development. :sunglasses:

## Important Directories/Files

```
gulpfile.coffee   - Gulp configuration
config.coffee     - Object that is passed to all tasks. Contains common things like file paths.
src/              - Stuff in this directory gets moved or processed, like SCSS or CoffeeScript
src/vendor        - Concatenated with Bower files
tasks/            - Gulp tasks are defined in here

build/            - Processed files go here. You could zip this up and deploy it.
```
