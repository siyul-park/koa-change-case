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
import defaultCaseConverterFactory from "./default-case-converter-factory";

export const camelCase = defaultCaseConverterFactory(toCamelCase);
export const capitalCase = defaultCaseConverterFactory(toCapitalCase);
export const constantCase = defaultCaseConverterFactory(toConstantCase);
export const dotCase = defaultCaseConverterFactory(toDotCase);
export const headerCase = defaultCaseConverterFactory(toHeaderCase);
export const noCase = defaultCaseConverterFactory(toNoCase);
export const paramCase = defaultCaseConverterFactory(toParamCase);
export const pascalCase = defaultCaseConverterFactory(toPascalCase);
export const pathCase = defaultCaseConverterFactory(toPathCase);
export const sentenceCase = defaultCaseConverterFactory(toSentenceCase);
export const snakeCase = defaultCaseConverterFactory(toSnakeCase);
