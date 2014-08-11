## Installation/Usage

Install the generator:

```
npm install -g generator-mg-redux
```

Generate project in current directory:

```
yo mg-redux
```

**The rest of this file is documentation for generated projects.**

---

## Requirements

- Gulp (`npm install -g gulp`)
- Bower (`npm install -g bower`)
- If you're on Windows, PHP. If you're on a Mac, you already have PHP. If you're on Linux, you probably know whether or not you have PHP installed.

## Setup

- `npm install`
- `bower install`

## Usage

To build, watch, and start a server:

```
gulp
```

For a one-off build:

```
gulp build
```

The rest of the tasks live in `tasks/`, split up by file.

```
 ____________________________________ 
/ All your stuff will be mooved into \
\ `build/`                           /
 ------------------------------------ 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### Errors

By default, plugin errors (such as errors with Sass compilation) will cause
Gulp to halt. Errors and warnings are fatal. If you want to keep Gulp running,
use the `--fatal=off` flag. This is useful if you are watching files and you
don't want to have to manually start gulp again.

```
gulp              # Errors will stop the build
gulp --fatal=off  # Errors will not stop the build
```

```
 ____________________________ 
/          Protip:           \
| alias g='gulp --fatal=off' |
| for udderly effortless     |
\ development.               /
 ---------------------------- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Important Directories/Files

```
src/           - Stuff in this directory gets moved or processed, like SCSS or CoffeeScript
src/assets/    - These files are moved straight into the build directory without being processed
src/scss/      - Scss files
src/coffee/    - All coffee files in here will be concatenated into js/all.js in your build directory
src/vendor/    - External libraries that aren't in bower. They'll be concatenated with bower files
build/         - Processed files go here. You could zip this up and deploy it.
tasks/         - Gulp tasks are defined in here
lib/           - Non-npm dependenices
```
