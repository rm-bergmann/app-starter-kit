# React App Starter Kit

This is a simple React App starter kit with the essential dependencies that I would use for development.
After experimenting with Create React App, I thought it was really good, but missing a few things, so I
have created something similar, but with a few extra's. I have also included my LESS mixin library, see 
below for list of the available mixins for use.

# Installation:
* Node & NPM are dependencies so they need to be installed.
* Clone the project, delete the git files (unless you are contributing to this repo).
* Install packages '$ npm install'.

## Commands:

```bash
$ npm start
```
* Runs Webpack-dev-server on port 3000.
* Updates JS & css on files with hot reload.
* Use this command for development.
* File changes are stored in memory

```bash
$ npm run build
```
* Bundles / minifies files for production.

```bash
$ npm test
```
* Runs unit tests

```bash
$ npm run test_watch
```
* Runs unit tests in watch mode

```bash
$ npm run format
```
* Formats files with Prettier

```bash
$ node app.js
$ nodemon app.js
```
* Serves the production build on Port 5000
* Nodemon should be installed glabally for that command to work

# What's included?:

## React & Redux
* React, React Dom, React Router, Prop-Types
* Redux, Redux Dev Tools, React Redux

## Axios
* Used for http requests

## Webpack Loaders & Plugins:
* Webpack-Dev-Server
* Babel-loader
* Less-loader, CSS-loader
* Post CSS Loader (Used for auto prefixing)
* UglifyJS
* HTML & Markdown loaders

## Testing & Linting
* Jest
* ES Lint
* Prettier
* [Airbnb Javascript style guide](https://github.com/airbnb/javascript)

## LESS

I have included my LESS Style library to help with faster CSS developement:
[More info here](https://github.com/rm-bergmann/less-style-library)

