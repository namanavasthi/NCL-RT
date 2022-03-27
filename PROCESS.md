# STEPS

want to document step-by-step process on how to setup this repo.

## Building TS/TSX

1. setup a npm project, `npm init -y`
2. create a `.gitignore` file
3. install react, typescript(ts), types for react as dev dependencies.
   `npm install react typescript @types/react --save-dev`
4. create the project structure
5. create sample button component
6. create exports for button at `/src/index.ts` at `/src/components/index.ts` and `/src/components/Button/index.ts`
7. adding ts `npx tsc --init`
8. updating ts config
9. adding rollup `npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev`
10. adding rollup config
11. updating package.json
12. run a build using `npm run rollup`

## Publishing The Library

1. push code to git
2. update `name` and `publishConfig` inside package.json
3. head over to github, create a token with publish rights
4. update `~/.npmrc` token and registry as follows :

```
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

5. run `npm publish`

## Building CSS

> NOTE : the plan is to build simple css first and then move onto integrating tailwind.

1. create simple css file for the component and import it in tsx file
2. now tell rollup how to handle css by installing `npm install rollup-plugin-postcss --save-dev`
3. update rollup config, add the plugin and tell TS not to worry about css files
4. run rollup and publish as `0.0.2`

## Optimization

1. adding `terser` for minification and peer dependencies for rollup `npm install rollup-plugin-peer-deps-external rollup-plugin-terser --save-dev`
2. update rollup to use terser and peer dependencies
3. update peer dependencies in `package.json` for `react`

## Adding Tests

1. add react testing library to test components and jest to run them `npm install @testing-library/react jest @types/jest --save-dev`
2. add a component test
3. add jest config
4. add a package.json command
5. we were using tsc for processing our jsx and then tsc made rollup understand jsx using the ts plugin for rollup. now we have to do something similar with jest.
6. we use babel to handle jsx transformations and babel-jest to make jest use babel `npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev`
7. add babel config
8. now, we configured postcss for rollup but jest isn't aware on how to handle css. so for that we use identity object proxy `npm install identity-obj-proxy --save-dev`
9. update jest config
10. run `npm run test`

## Adding Storybook

1. `npx sb init --builder webpack5`
2. run `npm run storybook`
   > if you encounter any errors `rm -rf dist/ node_modules/ package-lock.json` and fresh-install using `npm install`

## Adding SCSS Support

1. install scss for storybook and rollup `npm install @storybook/preset-scss css-loader sass sass-loader style-loader --save-dev`
2. update storybook main.js
3. update rollup config
