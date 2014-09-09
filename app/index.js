'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var GulpMgGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('projectName', {
      optional: true, defaults: 'gnarly-project'
    });

    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  prompting: function () {
    var done = this.async();

    // Because yosay is SO mainstream
    this.log(chalk.green("\n                    //\n\
             ______||__\n\
            '----------'\n\
            |          |\n\
 Let's      |          |\n\
 make      \\|   •‿•    |/\n\
 websites!  |          |\n\
             \\        /\n\
              |      |\n\
              |      |\n\
               '----'\n"));

    var prompts = [{
      name: 'projectName',
      message: 'What would you like to call this project?',
      default: this.projectName
    },
    {
      type: 'confirm',
      name: 'includePatternLab',
      message: 'Would you like to include Pattern Lab? (http://patternlab.io)',
      default: true
    }];

    this.prompt(prompts, function (answers) {
      this.answers = answers

      done();
    }.bind(this));
  },

  app: function (answers) {
    var answers = this.answers;

    this.copy('README.md', 'README.md');
    this.copy('gitignore', '.gitignore');

    this.mkdir('lib');
    this.copy('error-handler.coffee', 'lib/error-handler.coffee');

    this.directory('tasks', 'tasks');
    this.directory('src', 'src');

    this.template('bower.template.json', 'bower.json', answers);
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
      this.template('index.template.html', 'src/assets/index.html', answers);
    }
  }
});

module.exports = GulpMgGenerator;
