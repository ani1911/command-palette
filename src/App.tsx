import { useEffect, useState } from "react";
import { corePlugin } from "./commands/corePlugins";
import { collectCommands } from "./commands/registry";
import { CommandPalette } from "./components/CommandPalette";

function App() {
  const [open, setOpen] = useState(false);

  const commands = collectCommands([corePlugin]);


  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifier = isMac ? e.metaKey : e.ctrlKey;

      if (modifier && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold">
        Press Ctrl + K
      </h1>

      {open && (
        <CommandPalette
          commands={commands}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
