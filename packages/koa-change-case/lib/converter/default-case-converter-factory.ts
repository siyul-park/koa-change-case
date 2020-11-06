import CaseConverterFactory from "./case-converter-factory";
import Converter from "./converter";
import {
  ArrayConvertProcessor,
  DefaultConvertProcessor,
  ObjectConvertProcessor,
} from "../convert-processor";
import requestBody from "../exchanger/request-body";

const defaultCaseConverterFactory: CaseConverterFactory = (changeCase) => {
  const converter = new Converter();
  converter
    .register(new DefaultConvertProcessor())
    .register(new ObjectConvertProcessor(changeCase))
    .register(new ArrayConvertProcessor());

  return converter;
};

export default defaultCaseConverterFactory;
