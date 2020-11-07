import Application from "koa";
import { Exchanger } from "../exchanger";
import { ConvertProcessor } from "../convert-processor";

interface MiddlewareFactory {
  readonly changeCase: (name: string) => string;

  (exchanger: Exchanger<unknown, unknown>): Application.Middleware;

  convert(value: unknown): unknown;
  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority?: number
  ): MiddlewareFactory;
  unregister(priority: number): MiddlewareFactory;
}

export default MiddlewareFactory;
