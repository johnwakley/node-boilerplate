# node-boilerplate
A starter template for Node.js apps.

1. Create `package.json` file
```
npm init --yes
```

2. Install TypeScript
```
npm i -D typescript @types/node
```

3. Generate `tsconfig.json`
Use recommended (https://github.com/tsconfig/bases#node-lts-tsconfigjson):
```
npm install -D @tsconfig/node-lts
echo -e '{\n\t"extends": "@tsconfig/node-lts/tsconfig.json"\n}' >> tsconfig.json
```

4. Install TypeScript Execute (https://github.com/esbuild-kit/tsx)
```
npm install -D tsx
```