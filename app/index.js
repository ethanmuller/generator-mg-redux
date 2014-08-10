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
    this.log(yosay('Welcome to the marvelous GulpMg generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_README.md', 'README.md');
    this.copy('_bower.json', 'bower.json');
    this.copy('_config.coffee', 'config.coffee');
    this.copy('_error-handler.coffee', 'error-handler.coffee');
    this.copy('_gulpfile.coffee', 'gulpfile.coffee');
    this.copy('_package.json', 'package.json');

    this.directory('lib', 'lib');
    this.directory('tasks', 'tasks');
    this.directory('src', 'src');
  },

  projectfiles: function () {
    // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = GulpMgGenerator;
