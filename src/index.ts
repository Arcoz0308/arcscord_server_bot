import { ArcClient } from "arcscord";
import { env } from "#/utils/env";
import { readyEvent } from "#/events/ready";

const client = new ArcClient(env.TOKEN, {
  intents: [
    "GuildMessages",
    "GuildMembers",
    "Guilds",
    "MessageContent",
    "DirectMessages",
    "DirectMessageReactions",
    "GuildMessageReactions",
  ],
});

client.loadEvents([
  readyEvent,
]);

void client.login();