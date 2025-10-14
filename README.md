## ABOUT

Vite + React map app utilizing Open Layers and `ol-ext` set.

Displays different layers on top of OSM base with some of them being togglable. Map is showcasing Poland by adding a responsive mask effect. 

## ISSUES
Due to lack of experience working with Open Layers or any mapping library whatsoever I had a fair deal of issues understanding some of the ideas and logic behind its features, e.g. 
- drawing with polygons
- understanding/using/converting projections 
- reading `.geojson` files 
- optimizing OL performance with WebGL renderers
- finding reliable sources of information/examples on OL/cartography libraries/CRS, etc 

I've managed to deal with most if not all of them by a mix of trial and error/extensive googling/AI conversations and reusing solutions found on the web that allowed me to get a decent working point.

## TRADE OFFS
- styling - looks plain; with raw css use, and very few abstractions when it comes to components, spent too long on the logic layer of the app to really polish the UI/UX side of things
- project structure - while I tried to keep things organised and clean for the most part; with the deadline approaching I started taking shortcuts here and there to get it to a working state
- lack of tests
- code should be documented way more thoroughly in some places but at the same time I have also assumed that parts of what was initially beyond my knowledge is casual knowledge for someone experienced in the field

## SETUP

### Prerequisites

- Node.js 18 or newer
- npm (bundled with Node.js)

### Install dependencies

```sh
# while in repo directory
npm install
```

### Start the development server

```sh
npm run dev
```

## USING THE APP
- use the buttons on the map overlay to zoom in/out 
- use cursor to navigate across the map (outside of Poland is masked)
- use buttons to toggle lines/districts masks
