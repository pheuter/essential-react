![](https://dl.dropboxusercontent.com/u/1803181/essential-react-logo.png)

[![Travis branch](https://img.shields.io/travis/pheuter/essential-react.svg?style=flat-square)](https://travis-ci.org/pheuter/essential-react)
[![Coveralls](https://img.shields.io/coveralls/pheuter/essential-react.svg?style=flat-square)](https://coveralls.io/r/pheuter/essential-react)
[![npm](https://img.shields.io/npm/v/essential-react.svg?style=flat-square)](https://www.npmjs.com/package/essential-react)
[![David](https://img.shields.io/david/pheuter/essential-react.svg?style=flat-square)](https://david-dm.org/pheuter/essential-react)

A minimal skeleton for building testable React apps using ES6.

- [Design Goals](#design-goals)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
  - [Dev](#dev)
- [Project structure](#project-structure)
- [Commands](#commands)
  - [watch](#watch)
  - [build](#build)
  - [test](#test)
  - [cover](#cover)
  - [server](#server)
  - [clean](#clean)
- [TODO](#todo)

## Design Goals

- As few tools as possible (no task runners, etc...)
- ES6 with support for legacy browsers (IE 8)
- Testability
- No templates, compose DOM alongside components via JSX
- No stylesheets, leverage [Radium](http://projects.formidablelabs.com/radium/) for styling in JavaScript
- Session-driven routing using [react-router](https://github.com/rackt/react-router) with async data fetching

## Getting Started

```sh
$ npm install
```

You can now start the local dev server:

```sh
$ npm run server
```

and start the watcher:

```sh
$ npm run watch
```

Navigate to **http://localhost:8080/** to view the app.

## Dependencies

- [react v0.12](http://facebook.github.io/react/)
- [react-router v0.12](https://github.com/rackt/react-router)
- [xhr v2.0](https://github.com/Raynos/xhr)
- [es5-shim v4.1](https://github.com/es-shims/es5-shim)
- [console-polyfill v0.2](https://github.com/paulmillr/console-polyfill)

### Dev

- [browserify v9.0](http://browserify.org/)
- [babelify v5.0](http://babeljs.io/)
- [mochify v2.6](https://github.com/mantoni/mochify.js)
- [expect.js v4.12](https://github.com/Automattic/expect.js)

Check out [package.json](package.json) for complete list.

## Project structure

![](https://www.dropbox.com/s/j936nd4j57u45cb/Screenshot%202015-03-08%2016.56.05.png?dl=1)

Components are grouped into 2 main categories:

- **common** - contains various classes and components that are shared between pages and views
- **pages** - contains components grouped by the page / view / feature they belong to.

A case can be made to move **routers** into **common**, but I felt it made sense to keep them in their own section.

## Commands

A core philosophy of this skeleton app is to keep the tooling to a minimum. For this reason, you can find all the commands in the `scripts` section of [package.json](package.json).

### watch

```sh
$ npm run watch
```

**Input:** `src/main.jsx`

**Output:** `build/app.js`

This leverages [watchify](https://github.com/substack/watchify) to efficiently cache and build your browserify bundle on-the-fly as you save various files.

It also automatically includes source maps into the output file, allowing you to browse code and set breakpoints on the original ES6 code:

![](https://www.dropbox.com/s/zgb3psadwcawjc8/Screenshot%202015-03-08%2017.09.53.png?dl=1)

### build

```sh
$ npm run build
```

**Input:** `src/main.jsx`

**Output:** `build/app.js`

Very similar to **watch**, but doesn't include source maps and minifies the output using [uglifyjs2](https://github.com/mishoo/UglifyJS2).

### test

```sh
$ npm test
$ npm run test-watch
```

**Input:** `test/main.js`

Leverages [Mochify](https://github.com/mantoni/mochify.js) to run through all tests `require-d` in the input file.

Running `test-watch` will listen for changes and re-run the specs on-the-fly.

### cover

```sh
$ npm run cover
```

**Input:** `test/main.js`

Executes [cover.js](cover.js) that leverages [mochify-istanbul](https://github.com/ferlores/mochify-istanbul) to generate a code coverage report that is then sent to [Coveralls](http://coveralls.io/).

### server

```sh
$ npm run server
```

**Input:** `server.js`

Runs a local dev server using [express](http://expressjs.com/) on port **8080**, serving static files in the [build/](build/) directory.

### clean

```sh
$ npm run clean
```

**Input:** `build/app.js`

Removes the compiled app file from build.

## TODO

- [ ] Styling using [Radium](https://github.com/FormidableLabs/radium).
  - [ ] Responsive design with media query mixins
- [x] Testing
  - [x] Unit test suite
  - [x] CI
  - [x] Code coverage
- [ ] Examples of nested views
- [ ] More complex navigation