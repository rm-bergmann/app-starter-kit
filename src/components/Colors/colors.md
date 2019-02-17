# Colors

CSS has a huge [list of color variable names][1] already built in,
but they are not easy to memorize unless you use them frequently.

Ive included some random LESS color variables to make it easy to experiment
with random colors if you don't have a set color pallette yet.

Ideally you will have your own color pallette with HEX or RGB color variables
defined in variables.less which will override these color values, then you can
set your color variables to @primary / @secondary / @tertiary color variables.

## CSS Framework

I have not used a commercial CSS framework yet but I have used their concepts.
I can always work one in later but for now I want to try my own concept and see
if it works better for me.

My concept is to use OOCSS within LESS mixins so we can re-use groups of styles.
I have use a BEM - like naming convention, but instead of the "double underscore &
double hyphen seperators (block__element--modifier) I have used double hyphen &
triple hyphen seperators. (block--element---modifier)

### Why have I done this?

Its a small preference of character consistency, and if I double click on a word to
highlight it in the text editor, when its hyphened only that word will be hghlighted,
whereas when its underscored, both words on either side of the underscore are highlighted.

I like the easy access of double clicking single words for *fast text selection*

Another thing I like to achieve is clean HTML so when debugging in the browser it is easy
to find elements as fast as possible. This is how I optimize my workflow.

Another thing to note is, for consistency, I use the same spelling for variable naming as CSS
itself does (eg: "gray" & "color", instead of "grey", "colour")

[1]: https://www.quackit.com/css/css_color_codes.cfm