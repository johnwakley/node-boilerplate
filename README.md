# node-boilerplate

This branch uses the `tsc --watch` compiler option to recompile on input file changes, and [`nodemon`](https://github.com/remy/nodemon) to automatically restart the server when it detects changes to your app.

[`concurrently`](https://github.com/open-cli-tools/concurrently) allows us to run multiple commands like `nodemon` to watch for file changes and `tsc` to compile the code.