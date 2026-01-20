import type { CommandPlugin } from "./plugins";

export const corePlugin: CommandPlugin = {
  id: "core",
  commands: () => [
    {
      id: "open-dashboard",
      label: "Open Dashboard",
      keywords: ["home", "main"],
      run: ({ closePalette }) => {
        console.log("Dashboard opened");
        closePalette();
      },
    },
    {
      id: "logout",
      label: "Logout",
      keywords: ["signout", "exit"],
      run: async ({ closePalette }) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log("Logged out");
        closePalette();
      },
    },
  ],
};
