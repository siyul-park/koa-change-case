import Application from "koa";
import { Position } from "koa-position";
import { ConvertProcessor } from "convable";

interface MiddlewareFactory {
  (position: Position): Application.Middleware;

  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ): MiddlewareFactory;
  unregister(priority: number): MiddlewareFactory;
}

export default MiddlewareFactory;
