import { createCommand } from "arcscord";
export const pingCommand = createCommand({
  build: {
    slash: {
      name: "ping",
      description: "Get a pong !",
    },
  },
  run: (ctx) => {
    return ctx.reply("Pong !");
  },
});