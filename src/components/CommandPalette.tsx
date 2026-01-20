import { useEffect, useRef, useState } from "react";
import type { Command } from "../commands/types";
import { rankCommands } from "../utils/fuzzyScore";

type Props = {
  commands: Command[];
  onClose: () => void;
};

export function CommandPalette({ commands, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const results = rankCommands(commands, query);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    if (e.key === "Enter") {
      const command = results[activeIndex];
      if (command) {
        command.run({
          closePalette: onClose,
        });
      }
    }

    if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40">
      <div className="mt-24 w-full max-w-lg rounded-lg bg-white shadow-lg">
        <input
          ref={inputRef}
          role="combobox"
          aria-expanded="true"
          aria-controls="command-list"
          aria-activedescendant={results[activeIndex]?.id}
          className="w-full border-b p-3 outline-none"
          placeholder="Type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <ul
          id="command-list"
          role="listbox"
          className="max-h-80 overflow-y-auto p-2"
        >
          {results.length === 0 && (
            <li className="p-2 text-sm text-gray-500">No commands found</li>
          )}

          {results.map((cmd, index) => (
            <li
              id={cmd.id}
              role="option"
              aria-selected={index === activeIndex}
              key={cmd.id}
              className={`cursor-pointer rounded p-2 ${
                index === activeIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              {cmd.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
