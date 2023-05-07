# node-boilerplate

This branch demonstrates ESM support in [`ts-node`](https://github.com/TypeStrong/ts-node#commonjs-vs-native-ecmascript-modules)

When using pure ESM packages, like [`p-retry`](https://github.com/sindresorhus/p-retry), add the following to `package.json` to let Node know that you want to use the ESM Specification for resolving modules:
```
  {
    "type": "module"
  }
```
