'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var cowsay = require('cowsay');
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

    // Because yosay is SO mainstream
    this.log(chalk.green("\n                    //  \n\
             ______||__ \n\
            '----------'\n\
 Let's      |          |\n\
 make      \\|   •‿•    |/\n\
 websites!  |          |\n\
             \\        / \n\
              |      |  \n\
              |      | \n\
              |      |  \n\
               '----'   \n"));

    var prompts = [{
      name: 'projectName',
      message: 'What would you like to call this project?',
      default: 'new-project'
    },
    {
      type: 'confirm',
      name: 'includePatternLab',
      message: 'Would you like to include Pattern Lab?',
      default: true
    }];

    this.prompt(prompts, function (answers) {
      this.answers = answers

      done();
    }.bind(this));
  },

  app: function (answers) {
    var answers = this.answers;
    this.log(answers);

    this.copy('README.md', 'README.md');
    this.copy('bower.json', 'bower.json');
    this.copy('error-handler.coffee', 'error-handler.coffee');

    this.mkdir('lib');

    this.directory('tasks', 'tasks');
    this.directory('src', 'src');

    this.template('package.template.json', 'package.json', answers);
    this.template('gulpfile.template.coffee', 'gulpfile.coffee', answers);
    this.template('watch-task.template.coffee', 'tasks/watch.coffee', answers);

    if (answers.includePatternLab) {
      // Copy pattern lab itself
      this.directory('_patternlab-php', 'lib/patternlab-php');

      // Copy pattern lab task
      this.copy('pattern-lab-task.template.coffee', 'tasks/pattern-lab.coffee');

      // Copy default patterns
      this.directory('_pattern-lab-patterns', 'src/pattern-lab');
    } else {
      this.copy('_index.html', 'src/assets/index.html');
    }
  }
});

module.exports = GulpMgGenerator;
