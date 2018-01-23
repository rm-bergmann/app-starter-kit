# React App Starter Kit

This is a simple React App starter kit with the essential dependencies that I would use for development.
After experimenting with Create React App, I thought it was really good, but missing a few things, so I
have created something similar, but with a few extra's. I have also included my LESS mixin library, see 
below for list of the available mixins for use.

# Installation:
* Node & NPM are dependencies so they need to be installed.
* Clone the project, delete the git files (unless you are contributing to this repo).
* Install the node_modules with '$ npm install'.

## Commands:

### $ npm start
* Runs Webpack watch mode with browsersync (localhost:3000).
* Updates JS & css on file save rebundles and reloads browser.
* Use this command for development.

### $ npm run build
* Bundles / minifies files for production.

### $ npm run dev
* Runs webpack dev server on port 8080 and browsersync on 3000.
* Currently the changes don't update on file save, I will fix this asap, use npm start instead for now.

### $ npm test
* Runs unit tests

## What's included?:

## React
* React, React Dom
* React Router, React Router Dom

## Redux
* Redux, Redux Dev Tools, React Redux

## Axios
* Used for http requests

## Webpack Loaders & Plugins:
* Webpack watch mode
* Webpack-Dev-Server
* Browsersync & HTML Injection
* Babel-loader
* Less-loader, CSS-loader
* Post CSS Loader (Used for auto prefixing)
* UglifyJS

## Testing & Linting
* Jest
* ES Lint
* [Airbnb Javascript style guide](https://github.com/airbnb/javascript)

## JS Server
* Express JS
* Nodemon

## Pocketgrid

PocketGrid is a tiny and flexible grid system which comes with 2 classes 'block-group' for containers and 'block'
for columns. I have included a mixin for the block elements.

[More info here](http://arnaudleray.github.io/pocketgrid/)

## LESS

I set up LESS so it's namespaced with groups of re-usable mixins. This makes development time a lot faster for me.
I am essentially replacing common groups of styles with 1 line of code, in English readable format (Declarative).

## Pocketgrid
I will be migrating to the CSS grid soon, but for now I still use Pocketgrid as it works in all browsers.

Apply this mixin to elements with the .block class.
By default (mobile screens), it outputs width: 90%; margin-left: 5%:

```CSS
#display.grid();
```

Consider the following HTML:

```HTML
<div class"block block-01">Left Block</div>
<div class"block block-02">Right Block</div>
```

Lets say for a desktop screen you may want 2 blocks next to each other.
Just pass the width and left margin in a media query:

```CSS
.block {
 
  &-01 {
    #display.grid();
    
    @media @desktop-narrow {
      #display.grid(40%, 0);
    }
  }
  
  &-02 {
    #display.grid();
    
    @media @desktop-narrow {
      #display.grid(40%, 20%);
    }
  }
}
```

## Borders

Black solid border, default:

```CSS
#border.solid();
```

Maybe you want 4px red solid border? No problem, just pass in 4px, and the desired color.

```CSS
#border.solid(4px, #f00);
```

Maybe you want 2px green top border only? Pass in top (or bottom, left, right,) border-width value and color

```CSS
#border.solid(top, 2px, green);
```

## Absolute Positioning

No default included, specify top-left, bottom-left, top-right or bottom-right.
Values default to 0 and 0.
The code below compiles to: position: absolute; top: 0; left: 0;

```CSS
#position.absolute(top-left);
```

Try Positioning absolute, bottom: 10px, right: 5px:

```CSS
#position.absolute(bottom-right, 10px, 5px);
```

## Display Mixins

Apply this mixin to the parent element which will align children from left to right with equal spacing.
```CSS
#display.flex(space);
```

To minimize common repeatition, this mixin takes color as the first param and background-color as the second param.
By default color is set to black and background color set to white. Pass in the colours of your choice.
```CSS
/* color: black; background-color: white */
#display.colours();

/* color: white; background-color: blue */
#display.colours(white, blue);
```

Width and height are common styles to add to elements, use this mixin if width and height are different values:
The first param is the width value, the second param is the hight value:
```CSS
#display.dimensions(200px, 50px);
```

If the width and height are the same values pass in the type "equal", then the desired value (default is set to 100px)
```CSS
#display.dimensions(equal, 200px);
```

When you float an elements children left or right, apply this mixin so the parent can retain it's height:
```CSS
#display.clearfix();
```

When you target the :before and :after psuedo elements apply this mixin to display it.
```CSS
#display.psuedo();
```

Style a link as buttons, as used in Nav.
```CSS
#button.link();
```


## More Coming Soon. Stay tuned!
