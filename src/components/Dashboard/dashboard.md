# Dashboard

#### A custom boilerplate React + Redux App for starting new projects.
#### This aims to take the hassle out of all the set-up config.

By default, this app includes

* Clean, 3 column UI structured in CSS Grid.
* Browser reset styles
* 3 routes
* 'Folder by Feature' directory structure
* Production build and dev server

## Reasons to use this package:

- Webpack 4 pre-configured
- Good starting point for scalabilty of your app.
- Preset LESS mixins for easy styling.
- Basic mobile first CSS grid structure in place
- Includes linting on compile to keep your code styling standardised
- Includes useful commands
- Pre-configured routing
- Express JS pre-configured for production
- Includes markdown & HTML parsing for documentation
- Includes scalable functions for http requests
- You're a begginner and you want to learn more about good coding patterns

## Reasons to not use this package:

- You want something more advanced and configurable with many more options
- You want to use other CSS pre-processors
- You don't want to use React or any other packages listed in the packages section

I have included documentation and guidelines for using this package. There is always room for improvement, if you feel something can be improved please
submit a bug report / feature request on the gthub page. Pull requests welcome.

## How to use this package:

If you are reading this, I assume you have cloned the repo and started the dev server?
If you are building an app, the first thing you will want to do is remove the files that your app doesn't need.
Remember to delete the .git directory, unless you are contributing to this project.

Unfortuantely at this stage, there is no way to update versions which will reflect in your app because
your app is continued development from here on. However, I will be updating this from time to time so that
future projects have a better starting point.

## Notes:

EsLint & Prettier are built into the build so it will run on compile every time you save new changes.
You might find it annoying because your code can be absolutely fine but the styling is not adhering to the lint
standards, so it wont comiple and the module won't reload.

I like the fact my terminal tells me what improvements I need to make as I'm coding, so I keep it on.
This is especially very useful for beginners, and it helped me learn a lot about code.

It can be very annoying when we just want to try something without worrying about the formatting so here are some options:

- You can remove it from the compile and only have it in your editor / IDE
- You can assign `/* eslint-disable */` to a keyboard shortcut and paste it at the top of the file while you are trying things and then remove it
