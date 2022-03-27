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

## Building CSS
