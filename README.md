# React App Starter Kit

This is a simple React App starter kit with the essential dependencies that I would use for development,
all set up the way I like.

I have included settings for server side rendering, but currently it doesn't work well with webpack.
This is becuase when webpack compiles the JS file node_modules is excluded (as it should be), but there is an issue
with a common js dependency that causes an error in the comipled JS file, something like exports is not defined.
I am working on a solution, but so far everything I tried has not worked.

## Dependencies:

* Node, NPM
* React, React Router, Axios
* Webpack, Babel-loader, Less-loader
* Express JS, EJS
* LESS

## LESS

I set up LESS so it's namespaced with groups of re-usable mixins. This makes development time a lot faster for me.
Can be used accross all projects but each project will have some additional unique mixins specific for the project.