import {
  toCamelCase,
  toCapitalCase,
  toConstantCase,
  toDotCase,
  toHeaderCase,
  toNoCase,
  toParamCase,
  toPascalCase,
  toPathCase,
  toSentenceCase,
  toSnakeCase,
  createDefaultConverterManager,
} from "object-change-case";
import toMiddlewareFactory from "./to-middleware-factory";

export const camelCase = toMiddlewareFactory(
  createDefaultConverterManager(toCamelCase)
);
export const capitalCase = toMiddlewareFactory(
  createDefaultConverterManager(toCapitalCase)
);
export const constantCase = toMiddlewareFactory(
  createDefaultConverterManager(toConstantCase)
);
export const dotCase = toMiddlewareFactory(
  createDefaultConverterManager(toDotCase)
);
export const headerCase = toMiddlewareFactory(
  createDefaultConverterManager(toHeaderCase)
);
export const noCase = toMiddlewareFactory(
  createDefaultConverterManager(toNoCase)
);
export const paramCase = toMiddlewareFactory(
  createDefaultConverterManager(toParamCase)
);
export const pascalCase = toMiddlewareFactory(
  createDefaultConverterManager(toPascalCase)
);
export const pathCase = toMiddlewareFactory(
  createDefaultConverterManager(toPathCase)
);
export const sentenceCase = toMiddlewareFactory(
  createDefaultConverterManager(toSentenceCase)
);
export const snakeCase = toMiddlewareFactory(
  createDefaultConverterManager(toSnakeCase)
);
