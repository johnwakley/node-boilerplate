# node-boilerplate
A starter template for Node.js apps.

This branch uses [`ts-node-dev`](https://github.com/wclr/ts-node-dev), which compiles your TS app and restarts when files are modified.

When using pure ESM packages, like [`p-retry`](https://github.com/sindresorhus/p-retry), `ts-node-dev` suffers from the following issue:
https://github.com/sindresorhus/p-retry/issues/57

