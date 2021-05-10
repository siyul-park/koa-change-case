import createDefaultConverterManager from "./create-default-converter-manager";
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
} from "../change-case";
import toConverter from "./to-converter";

export const camelCase = toConverter(
  createDefaultConverterManager(toCamelCase)
);
export const capitalCase = toConverter(
  createDefaultConverterManager(toCapitalCase)
);
export const constantCase = toConverter(
  createDefaultConverterManager(toConstantCase)
);
export const dotCase = toConverter(createDefaultConverterManager(toDotCase));
export const headerCase = toConverter(
  createDefaultConverterManager(toHeaderCase)
);
export const noCase = toConverter(createDefaultConverterManager(toNoCase));
export const paramCase = toConverter(
  createDefaultConverterManager(toParamCase)
);
export const pascalCase = toConverter(
  createDefaultConverterManager(toPascalCase)
);
export const pathCase = toConverter(createDefaultConverterManager(toPathCase));
export const sentenceCase = toConverter(
  createDefaultConverterManager(toSentenceCase)
);
export const snakeCase = toConverter(
  createDefaultConverterManager(toSnakeCase)
);
