import Application from "koa";
import { Position } from "koa-position";
import { ConvertManager, ConvertProcessor } from "convable";

import MiddlewareFactory, {
  MiddlewareFactoryOptions,
} from "./middleware-factory";

function toMiddlewareFactory(
  convertManager: ConvertManager
): MiddlewareFactory {
  const middlewareFactory = (
    position: Position,
    options?: MiddlewareFactoryOptions
  ): Application.Middleware => {
    const guard = options?.guard;

    return async (context, next) => {
      if (guard == null || (await guard(context))) {
        const origin = await position.extract(context);
        await position.inject(context, convertManager.convert(origin));
      }

      await next();
    };
  };

  middlewareFactory.register = (
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ) => {
    convertManager.register(converter, priority);
    return middlewareFactory;
  };
  middlewareFactory.unregister = (priority: number) => {
    convertManager.unregister(priority);
    return middlewareFactory;
  };

  return middlewareFactory;
}

export default toMiddlewareFactory;
