# Project Name

Backend and Backend Testing with Nodejs

## Expressjs (Nodejs backend frameworkd)

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

`npm i express` to install express package

## Description

This project is the outcome of learning to code by creating basic web server that can handle simple HTTP requests.

## Installation

This is is a nodejs project which uses standard npm for installation of dependencies.

`npm install` or `npm i` as the shortcut will install the node_modules that the code depends on.

The [./.gitignore](./.gitignore) file tells git not to commit the `node_modules` folder. Each new pull from git may require a new execution of `npm i` to install any newly added dependencies where have been added to [./package.json](./package.json)

To test that we have pulled down working code, we run `npm test` to test the code. This way if any changes result in errors we know the changes made locally have broken the code or outdated one or more tests.

As a shortcut we can also run both commands as one as `npm it` for install and test. See [npm docs](https://docs.npmjs.com/cli/v10/commands/npm-install-test) for more about this and other commands and shortcuts.

## Usage

The steps above cover main the usage. This repository is just the code and tests to run the code.

A node server is available which runs the express library and serves the static webpage on localhost as a local server.

To start the server run this command and then click the link in the console to open the server or otherwise type it into the browser.

`npm run dev`

## Contributing

Adding tests and calculator functionality are a good continuous effort.

Create a new branch and make a pull request with any proposed changes.

To keep the code standard, we have the prettier library install and available as a command. Please run this before committing changes.

`npm run format:prettier`
