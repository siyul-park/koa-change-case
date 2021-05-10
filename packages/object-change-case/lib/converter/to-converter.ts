import { ConvertProcessor } from "convable";

import ConvertManager from "./convert-manager";
import Converter from "./converter";

function toConverter(convertManager: ConvertManager): Converter {
  const converter = (input: unknown) => convertManager.convert(input);

  converter.register = (
    convertProcessor: ConvertProcessor<unknown, unknown>,
    priority?: number
  ) => {
    convertManager.register(convertProcessor, priority);
    return converter;
  };
  converter.unregister = (priority: number) => {
    convertManager.unregister(priority);
    return converter;
  };

  return converter;
}

export default toConverter;
