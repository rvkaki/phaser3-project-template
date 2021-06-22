# Phaser 3 Webpack Project Template

A Phaser 3 project template with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/) that includes hot-reloading for development and production-ready builds.

Also comes with a Node.js server template with [socket.io](https://socket.io/) integration

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `yarn`.

## Available Commands

| Command          | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `yarn install`   | Install project dependencies                                                    |
| `yarn dev`       | Build project and open web server running project                               |
| `yarn dev-build` | Builds code bundle with production settings (minification, uglification, etc..) |
| `yarn start`     | Start nodejs server                                                             |
| `yarn build`     | Build code bundle and install server dependencies                               |

## Writing Code

After cloning the repo, run `yarn install` from your project directory. Then, you can start the local development server by running `yarn start`.

After starting the development server with `yarn dev`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Customizing the Template

### Babel

You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

```
"browsers": [
 ">0.25%",
 "not ie 11",
 "not op_mini all"
]
```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `yar build` command, your code will be built into a single bundle located at `server/public` along with any other assets you project depended.

Now you can deploy the server to something like [Heroku](https://www.heroku.com/home) and play your game.
