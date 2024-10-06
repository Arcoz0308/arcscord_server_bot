import { createEvent } from "arcscord";
import { pingCommand } from "#/commands/ping";

export const readyEvent = createEvent({
  event: "ready",
  run: async(ctx) => {
    await ctx.client.loadCommands([
      pingCommand,
    ]);
    return ctx.ok(true);
  },
});