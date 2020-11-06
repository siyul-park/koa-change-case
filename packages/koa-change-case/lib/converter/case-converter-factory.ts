import Converter from "./converter";

interface CaseConverterFactory {
  (changeCase: (name: string) => string): Converter;
}

export default CaseConverterFactory;
