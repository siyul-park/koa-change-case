import {
  camelCase as toCamelCase,
  capitalCase as toCapitalCase,
  constantCase as toConstantCase,
  dotCase as toDotCase,
  headerCase as toHeaderCase,
  noCase as toNoCase,
  paramCase as toParamCase,
  pascalCase as toPascalCase,
  pathCase as toPathCase,
  sentenceCase as toSentenceCase,
  snakeCase as toSnakeCase,
} from "change-case";
import defaultConverterManagerFactory from "./default-converter-manager-factory";
import toMiddlewareFactory from "./to-middleware-factory";

export const camelCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toCamelCase)
);
export const capitalCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toCapitalCase)
);
export const constantCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toConstantCase)
);
export const dotCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toDotCase)
);
export const headerCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toHeaderCase)
);
export const noCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toNoCase)
);
export const paramCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toParamCase)
);
export const pascalCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toPascalCase)
);
export const pathCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toPathCase)
);
export const sentenceCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toSentenceCase)
);
export const snakeCase = toMiddlewareFactory(
  defaultConverterManagerFactory(toSnakeCase)
);
