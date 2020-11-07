import { ConvertManager as ConvableConvertManager } from "convable";

class ConvertManager extends ConvableConvertManager {
  constructor(readonly changeCase: (name: string) => string) {
    super();
  }
}

export default ConvertManager;
