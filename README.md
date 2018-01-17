# React App Starter Kit

This is a simple React App starter kit with the essential dependencies that I would use for development.
After experimenting with Create React App, I thought it was really good, but missing a few things, so I
have created something similar, but with a few extra's. I have also included my LESS mixin library, I will
list the available mixins for use.

## Installation:

* $ git Clone
* $ npm install
* $ npm start     : Development Mode (localhost:8080) with browsersync (localhost:3000)
* $ npm run build : Bundles / minifies files for production
* $ npm test      : Runs unit tests

## Dependencies:

* Node, NPM
* React, React Router, React Router Dom
* Redux, Redux Dev Tools, React Redux
* Axios
* Webpack, Webpack-Dev-Server
* Express JS
* Babel-loader
* Less-loader, Post CSS Loader, CSS Loader
* Jest
* ES Lint
* Nodemon

## LESS

I set up LESS so it's namespaced with groups of re-usable mixins. This makes development time a lot faster for me.
Can be used accross all projects but each project will have some additional unique mixins specific for the project.

## Pocketgrid

PocketGrid is a tiny and flexible grid system which comes with 2 classes 'block-group' for containers and 'block'
for columns. I have included a mixin for the block elements.


