import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  TOKEN: z.string(),
});
const data = envSchema.safeParse(process.env);
if (!data.success) {
  throw data.error;
}
export const env = data.data;