# ts-url-kit

![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

Kit pequeño de **utilidades TypeScript** para URLs y query strings (strict mode).

## API
- `buildQuery(params)` — omite `null`/`undefined`, soporta arrays
- `parseQuery(search)` — claves repetidas → array
- `joinUrl(base, path, query?)`
- `normalizePath(pathname)`

## Uso
```bash
npm install
npm run demo
```

```ts
import { joinUrl } from "ts-url-kit";
joinUrl("https://api.dev", "/search", { q: "juliana", page: 1 });
```

## Autora
**Juliana Chantre Astudillo** · [GitHub](https://github.com/jchantre-jpg)
