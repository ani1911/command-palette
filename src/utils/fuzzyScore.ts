import type { Command } from "../commands/types";

export type ScoredCommand = {
  command: Command;
  score: number;
};

export function fuzzyScore(text: string, query: string): number {
  if (!query) return 0;

  let score = 0;
  let textIndex = 0;
  let lastMatchIndex = -1;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  for (let i = 0; i < lowerQuery.length; i++) {
    const char = lowerQuery[i];

    let found = false;

    while (textIndex < lowerText.length) {
      if (lowerText[textIndex] === char) {
        found = true;

        score += 10;

        if (lastMatchIndex === textIndex - 1) {
          score += 5;
        }

        lastMatchIndex = textIndex;
        textIndex++;
        break;
      }

      textIndex++;
    }

    if (!found) {
      return -Infinity;
    }
  }

  return score;
}

export function rankCommands(commands: Command[], query: string): Command[] {
  const start = performance.now();

  const result = commands
    .map((command) => ({
      command,
      score: fuzzyScore(command.label, query),
    }))
    .filter((item) => item.score > -Infinity)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.command);

  const end = performance.now();
  const duration = end - start;

  if (duration > 50) {
    console.warn(`Command ranking exceeded 50ms: ${duration.toFixed(2)}ms`);
  }

  return result;
}
