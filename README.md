# Phaser - Webpack Starter project

An opinionated/ easier starting point for Phaser games <https://phaser.io/>, by cass-h. Updated as desired

**WIP**

## Setup

Generate from the template at <https://github.com/cass-h/phaser-webpack/generate>, follow the creation steps, then clone your new repository. Install with

```
npm install
```

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application, or

```
npm run serve
```

to run locally

## Structure

### Redux

Sample Redux Store structure created with **Redux Toolkit**, with actions, thunks, and feature slices

#### actions.ts

Stores global or shared actions that can be listened to by multiple slices, or thunks to perform data fetching/decision logic

Data has been stored through localstorage to maintain redux game state without the use of a server - add any data you want stored to the redux state, and dispatch the 'saveGame' or 'loadGame' thunks to interact with your persistence.
