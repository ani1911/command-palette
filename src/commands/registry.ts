import type { CommandPlugin } from "./plugins";
import type { Command } from "./types";

export function collectCommands(
  plugins: CommandPlugin[]
): Command[] {
  return plugins.flatMap((plugin) => plugin.commands());
}
