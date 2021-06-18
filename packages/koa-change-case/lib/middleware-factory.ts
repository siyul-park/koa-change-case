import Application from "koa";
import { Position } from "koa-position";
import { ConvertProcessor } from "convable";

export type MiddlewareFactoryOptions = {
  guard?: (context: Application.Context) => Promise<boolean> | boolean;
};
interface MiddlewareFactory {
  (
    position: Position,
    options?: MiddlewareFactoryOptions
  ): Application.Middleware;

  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ): MiddlewareFactory;
  unregister(priority: number): MiddlewareFactory;
}

export default MiddlewareFactory;
