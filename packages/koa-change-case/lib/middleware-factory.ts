import Application from "koa";
import { Position } from "koa-position";
import { ConvertProcessor } from "convable";

interface MiddlewareFactory {
  (position: Position): Application.Middleware;

  convert(value: unknown): unknown;
  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ): MiddlewareFactory;
  unregister(priority: number): MiddlewareFactory;
}

export default MiddlewareFactory;
