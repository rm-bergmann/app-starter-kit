# React App Starter Kit

This is a simple React App starter kit with the essential dependencies that I would use for development.
After experimenting with Create React App, I thought it was really good, but missing a few things, so I
have created something similar, but with a few extra's. I have also included my LESS mixin library, I will
list the available mixins for use.

# Installation:

* $ git Clone
* $ npm install
* $ npm start     : Development Mode (localhost:8080) with browsersync (localhost:3000)
* $ npm run build : Bundles / minifies files for production
* $ npm test      : Runs unit tests

# Dependencies:
* Node, NPM

## React
* React, React Dom
* React Router, React Router Dom

## Redux
* Redux, Redux Dev Tools, React Redux

## Axios
* Used for http requests

## Webpack Loaders & Plugins:
* Webpack-Dev-Server
* Browsersync & HTML Injection
* Babel-loader
* Less-loader, CSS Loader
* Post CSS Loader (Used for auto prefixing)
* UglifyJS

## Testing & Linting
* Jest
* ES Lint

## JS Server
* Express JS
* Nodemon

## Pocketgrid

PocketGrid is a tiny and flexible grid system which comes with 2 classes 'block-group' for containers and 'block'
for columns. I have included a mixin for the block elements.

## LESS

I set up LESS so it's namespaced with groups of re-usable mixins. This makes development time a lot faster for me.
I am essentially replacing common groups of styles with 1 line of code, in English readable format (Declarative).

# Mixins

## Borders

Black solid border, default:

```CSS
#border.solid();
```

Maybe you want 4px red solid border? No problem, just pass in 2px, red

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

### Pocketgrid
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
    
    @media @min-desktop {
      #display.grid(40%, 0);
    }
  }
  
  &-02 {
    #display.grid();
    
    @media @min-desktop {
      #display.grid(40%, 20%);
    }
  }
}
```


## More Coming Soon. Stay tuned!
