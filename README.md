# node-boilerplate
A starter template for Node.js apps.

## Features
- Directly execute TypeScript on Node.js without precompiling with [TypeScript Execute (`tsx`)](https://github.com/esbuild-kit/tsx)
- Opinionated TypeScript style guide, formatter, and linter using [`gts`](https://github.com/google/gts)
- `git` pre-commit hooks with [`husky`](https://github.com/typicode/husky)

## Steps to recreate this repo
1. Create `package.json` file:
```
npm init --yes
```

2. Install TypeScript:
```
npm i -D typescript @types/node
```

3. Generate `tsconfig.json` with recommended [settings](https://github.com/tsconfig/bases#node-lts-tsconfigjson):
```
npm install -D @tsconfig/node-lts
echo -e '{\n\t"extends": "@tsconfig/node-lts/tsconfig.json"\n}' >> tsconfig.json
```

4. Install [TypeScript Execute (`tsx`)](https://github.com/esbuild-kit/tsx):
```
npm install -D tsx
```

5. Configure [`gts`](https://github.com/google/gts):
```
npx gts init
```

6. Install [`husky`](https://github.com/typicode/husky)
```
npx husky-init && npm install
```
