import { ConvertManager } from "convable";
import Application from "koa";
import ConvertProcessor from "convable/dist/convert-processor";
import MiddlewareFactory from "./middleware-factory";
import { Exchanger } from "../exchanger";

function toMiddlewareFactory(
  convertManager: ConvertManager
): MiddlewareFactory {
  const middlewareFactory = (
    exchanger: Exchanger<unknown, unknown>
  ): Application.Middleware => {
    return async (context, next) => {
      const origin = await exchanger.extract(context);
      await exchanger.inject(context, convertManager.convert(origin));
      await next();
    };
  };
  middlewareFactory.convert = (value: unknown) => convertManager.convert(value);
  middlewareFactory.register = (
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ) => convertManager.register(converter, priority);
  middlewareFactory.unregister = (priority: number) =>
    convertManager.unregister(priority);

  return middlewareFactory;
}

export default toMiddlewareFactory;