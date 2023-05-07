# node-boilerplate

This branch uses the `tsc --watch` compiler option to recompile on input file changes, and [`nodemon`](https://github.com/remy/nodemon) to automatically restart the server when it detects changes to your app.

[`concurrently`](https://github.com/open-cli-tools/concurrently) allows us to run multiple commands like `nodemon` to watch for file changes and `tsc` to compile the code.

To let node know that you want to use the ESM Specification for resolving modules, add the following to your package.json file.
```
  {
    "type": "module"
  }
```

https://stackoverflow.com/questions/72680713/unable-of-get-running-a-pure-esm-node-project
