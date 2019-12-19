'use strict';

const { existsSync } = require('fs');
const { join } = require('path');
const Generator = require('yeoman-generator');

const dependencies = [];
const devDependencies = [
  'rimraf',
  '@babel/cli',
  '@babel/core',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
  '@types/jest',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'eslint-config-prettier',
  'eslint-plugin-jest',
  'eslint-plugin-prettier',
  'husky',
  'jest',
  'lint-staged',
  'prettier',
  'rimraf',
  'standard-version',
  'typescript'
];

class MyGenerator extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  async prompting() {
    if (!existsSync(join(this.destinationPath('.'), '.git'))) {
      console.error('Need to run git init.');
      process.exit(1);
    }

    this.log('Generator starting... 🤖');

    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Input the name for this project',
        validate: (input) => Boolean(input.length)
      },
      {
        type: 'input',
        name: 'output',
        message: 'Input the output directory for this project',
        default: 'lib',
        validate: (input) => Boolean(input.length)
      }
    ]);
  }

  writing() {
    const { name, output } = this.answers;

    this.fs.copyTpl(this.templatePath('.*'), this.destinationPath('.'), {
      name,
      output
    });

    this.fs.copyTpl(this.templatePath('**'), this.destinationPath('.'), {
      name,
      output
    });
  }

  install() {
    this.npmInstall(dependencies, { saveDev: false });
    this.npmInstall(devDependencies, { saveDev: true });
  }

  end() {
    // TODO: delete .DS_Store

    this.log('Bye... 👋');
  }
}

module.exports = MyGenerator;
