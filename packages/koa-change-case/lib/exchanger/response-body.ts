import Exchanger from "./exchanger";

const responseBody: Exchanger = {
  inject: (ctx, value): void => {
    ctx.response.body = value;
  },
  extract: (ctx) => ctx.response.body,
};

export default responseBody;
