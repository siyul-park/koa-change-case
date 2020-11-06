import { ConvertManager } from "convable";
import {
  ArrayConvertProcessor,
  DefaultConvertProcessor,
  ObjectConvertProcessor,
} from "../convert-processor";

function defaultConverterManagerFactory(
  changeCase: (name: string) => string
): ConvertManager {
  const converter = new ConvertManager();
  converter
    .register(new DefaultConvertProcessor())
    .register(new ObjectConvertProcessor(changeCase))
    .register(new ArrayConvertProcessor());

  return converter;
}

export default defaultConverterManagerFactory;
