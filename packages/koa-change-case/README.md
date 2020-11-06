# Koa change case
Extensible Koa middleware for converting objects in context

## Use
```typescript
import Koa from "koa";
import { snakeCase, camelCase, requestBody, responseBody } from "koa-change-case";
import bodyParser from "koa-bodyparser";


const app = new Koa();

app.use(bodyParser())
app.use(camelCase(requestBody))

// Set your middlewares

app.use(snakeCase(responseBody))

```
