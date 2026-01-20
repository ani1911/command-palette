import type { Command } from "./types";

export type CommandPlugin = {
  id: string;
  commands: () => Command[];
};
