import { ConvertProcessor } from "convable";

interface Converter {
  (input: unknown): unknown;

  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ): Converter;
  unregister(priority: number): Converter;
}

export default Converter;
