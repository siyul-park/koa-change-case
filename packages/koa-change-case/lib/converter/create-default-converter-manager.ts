import {
  ArrayConvertProcessor,
  DefaultConvertProcessor,
  ObjectConvertProcessor,
} from "../convert-processor";
import ConvertManager from "./convert-manager";

function createDefaultConverterManager(
  changeCase: (name: string) => string
): ConvertManager {
  const converter = new ConvertManager(changeCase);
  converter
    .register(new DefaultConvertProcessor())
    .register(new ObjectConvertProcessor(changeCase))
    .register(new ArrayConvertProcessor());

  return converter;
}

export default createDefaultConverterManager;
