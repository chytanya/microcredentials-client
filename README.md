## MicroCredentials Client Application

<br>

> Built on top of Facebook's [React](https://facebook.github.io/react/) library,
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server
> and [Flux](http://facebook.github.io/flux/) architecture. Containing
> modern web development tools such as [Webpack](http://webpack.github.io/),
> [Babel](http://babeljs.io/) and [BrowserSync](http://www.browsersync.io/).

### Documentation

 * **General**
   - [BloomBoard React Style Guide](./docs/react-style-guide.md)
   - [How to configure text editors and IDEs](./docs/how-to-configure-text-editors.md)

### Getting Started

Just clone the repo and start having fun:

```shell
$ git clone https://github.com/chytanya/microcredentials-client.git microcredentials-client
$ cd microcredentials-client
$ npm install                   # Install Node.js components listed in ./package.json
$ npm start                     # Compile and launch

If you want to update the upstream, set the upstream to this repo. 
WARNING: This will update the master branch and might break the application with incompatibilities. 

$ git remote add upstream https://github.com/kriasoft/react-starter-kit.git


For instructions on how to update, [here](https://help.github.com/articles/syncing-a-fork/)


### How to Test

Run unit tests powered by [Jest](https://facebook.github.io/jest/) with the following
[npm](https://www.npmjs.org/doc/misc/npm-scripts.html) command:

```shell
$ npm test
```

Test any javascript module by creating a `__tests__/` directory where
the file is. Name the test by appending `-test.js` to the js file.
[Jest](https://facebook.github.io/jest/) will do the rest.

---
For more information on the original boilerplate, take a look at the [BOILERPLATE README.md](./README-Boilerplate.md).
