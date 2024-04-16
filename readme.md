# stencil-svg-props-are-not-mapped-to-attrs

This is a repro case to show that SVG props are not mapped to attributes in Stencil.

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `npm run start`

Notice how `strokeWidth` used in rendering is not mapped to `stroke-width' in the SVG.

