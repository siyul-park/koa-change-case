import { ConvertManager, ConvertProcessor } from "convable";
import Application from "koa";
import { Exchanger } from "../exchanger";

interface MiddlewareFactory {
  (exchanger: Exchanger<unknown, unknown>): Application.Middleware;

  convert(value: unknown): unknown;
  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ): ConvertManager;
  unregister(priority: number): ConvertManager;
}

export default MiddlewareFactory;
