## The TypeScript Compilation Pipeline

```
index.ts
        │
        ▼
TypeScript Compiler (tsc)
        │
        ▼
index.js
        │
        ▼
Node.js
        │
        ▼
Execution
```

## Production Project Structure

```
learn-express-ts/
│
├── src/
│   ├── app.ts
│   ├── server.ts
│   │
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   ├── api/
│   ├── models/
│   ├── types/
│   ├── config/
│   └── utils/
│
├── dist/
│
├── package.json
├── tsconfig.json
└── .env
```

## npx

> When do you use npx?

- Use npx when you're running a package directly from the terminal, not from an npm script.

## tsx 

> It's a command-line tool that runs TypeScript files directly without requiring you to compile them first.


```
tsx watch src/server.ts
│   │      │
│   │      └── The TypeScript entry file
│   └───────── Watch for file changes and restart automatically
└───────────── The tsx runtime

```

---------------------------------------------------------------------------------------------------------
| `Feature`                      | `tsx`                          | `ts-node`                             
| ---------------------------- | -----------------------------  |
| Purpose                      | Run TypeScript files directly  | Run TypeScript files directly                                                        |
| Speed                        | ⚡ Faster (uses `esbuild`)      | 🐢 Slower (uses the TypeScript compiler)                                           |
| Type checking                | ❌ No (transpiles only)        | ✅ Can type-check (or skip with `--transpile-only`)                                 |
| ESM support                  | ✅ Excellent                   | ⚠️ More configuration may be needed                                                |
| Watch mode                   | ✅ Built in (`tsx watch`)      | ❌ Use external tools like `nodemon` or `ts-node-dev`                               |
| React `.tsx` files           | ✅ Supports them               | ✅ Supports them                                                                    |
| Recommended for new projects | ✅ Yes                         | Mostly for existing projects or when full type checking during execution is needed |
---------------------------------------------------------------------------------------------------------

---

## Our Production Configuration

```
{
  "compilerOptions": {
    "target": "ES2022", //Tells TS compiler to what JavaScript should it generate
    "module": "NodeNext", //Tells TS which import/export module to use
    "moduleResolution": "NodeNext", // Tells TypeScript how to find the package

    "rootDir": "./src", // Tells TS where the source code exists
    "outDir": "./dist", // Tells TS to compiled to place javascript here

    "strict": true, // It enabled strict type checking

    "esModuleInterop": true, // This solves compatibility issues between 

    "forceConsistentCasingInFileNames": true,

    "skipLibCheck": true, // Skip checking library declaration files. Helps compile faster

    "sourceMap": true, // Enables Typescript debugging, Before dist/server.js:125 After src/server.ts:42

    "resolveJsonModule": true, // resolves JSON file imports

    "noImplicitReturns": true, // Enables Every code path should return something if your function is expected to.

    "noUnusedLocals": true,

    "noUnusedParameters": true
  },

  "include": ["src"], // compiles only file/folders mentioned here

  "exclude": [
    "node_modules",
    "dist"
  ] // Doesnt compiles file/folders mentioned here
}
```

## The Request Object 
```
Request<
    Params,
    ResBody,
    ReqBody,
    ReqQuery,
    Locals
>
```

```
Incoming HTTP Request
│
├── URL Params
│      ↓
│   Request<Params, ...>
│
├── Request Body
│      ↓
│   Request<..., ReqBody, ...>
│
├── Query Parameters
│      ↓
│   Request<..., ReqQuery>
│
└── Response
```

## The Response Object

```js
interface ApiResponse<T> {

    success: boolean;

    data: T;
}
```

```
Response<ApiResponse<Product>>
```