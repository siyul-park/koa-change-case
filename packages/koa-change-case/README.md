# Koa change case  
Expansible Koa middleware for converting objects in context
  
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
  
## Expansion  
### Convert custom type  
```typescript
import { ConvertProcessor, Converter, snakeCase } from "koa-change-case";

class SetConvertProcessor
  implements ConvertProcessor<Map<unknown, unknown>, Map<unknown, unknown>> {
  constructor(private readonly changeCase: (name: string) => string) {}

  convert(
    map: Map<unknown, unknown>,
    converter: Converter
  ): Map<unknown, unknown> {
    const newMap = new Map<unknown, unknown>();
    map.forEach((value, key) => {
      const convertedKey = typeof key !== "string" ? key : this.changeCase(key);
      newMap.set(convertedKey, converter.convert(value));
    });

    return newMap;
  }

  isConvertible(value: unknown): boolean {
    return value instanceof Map;
  }
}

snakeCase.register(new SetConvertProcessor(snakeCase.changeCase))
```
  
### Convert other convention
```typescript
import { toMiddlewareFactory, createDefaultConverterManager } from "koa-change-case";

const toOtherCase: (key: string) => string // TODO(implement) 

const otherCase = toMiddlewareFactory(
  createDefaultConverterManager(toOtherCase)
);
```
