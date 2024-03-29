import { Converter, ConvertProcessor } from "convable";
import { isPlainObject } from "is-plain-object";

class ObjectConvertProcessor
  implements ConvertProcessor<Record<string, unknown>, Record<string, unknown>>
{
  constructor(private readonly changeCase: (name: string) => string) {}

  convert(
    object: Record<string, unknown>,
    converter: Converter
  ): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    Object.entries(object).forEach(([key, value]) => {
      result[this.changeCase(key)] = converter.convert(value);
    });

    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  isConvertible(value: unknown): boolean {
    if (typeof value !== "object") return false;
    return isPlainObject(value);
  }
}

export default ObjectConvertProcessor;
