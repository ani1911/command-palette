import { corePlugin } from "./commands/corePlugins";
import { collectCommands } from "./commands/registry";

function App() {
  const commands = collectCommands([corePlugin]);

  return (
    <div className="p-4">
      <h1 className="font-bold">Commands</h1>
      <ul>
        {commands.map((cmd) => (
          <li key={cmd.id}>{cmd.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
