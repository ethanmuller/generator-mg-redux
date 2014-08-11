'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var GulpMgGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous gulp-mg generator!'));
  },

  app: function () {
    this.copy('README.md', 'README.md');
    this.copy('bower.json', 'bower.json');
    this.copy('error-handler.coffee', 'error-handler.coffee');
    this.copy('gulpfile.coffee', 'gulpfile.coffee');
    this.copy('package.json', 'package.json');

    this.directory('lib', 'lib');
    this.directory('tasks', 'tasks');
    this.directory('src', 'src');
  }
});

module.exports = GulpMgGenerator;
