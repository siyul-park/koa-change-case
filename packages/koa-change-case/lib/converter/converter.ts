import { ConvertManager } from "convable";
import Application from "koa";
import { Exchanger } from "../exchanger";

class Converter extends ConvertManager {
  toMiddleware(exchanger: Exchanger<unknown, unknown>): Application.Middleware {
    return async (context, next) => {
      const value = await exchanger.extract(context);
      const result = this.convert(value);
      await exchanger.inject(context, result);
      await next();
    };
  }
}

export default Converter;
