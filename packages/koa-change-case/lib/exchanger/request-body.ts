import { DefaultState } from "koa";
import Exchanger from "./exchanger";

const requestBody: Exchanger<DefaultState, { request: { body: unknown } }> = {
  inject: (ctx, value): void => {
    ctx.request.body = value;
  },
  extract: (ctx) => ctx.request.body,
};

export default requestBody;
