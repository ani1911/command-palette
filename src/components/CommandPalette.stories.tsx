import type { Meta, StoryObj } from "@storybook/react";
import { CommandPalette } from "./CommandPalette";
import { corePlugin } from "../commands/corePlugins";
import { collectCommands } from "../commands/registry";

const meta: Meta<typeof CommandPalette> = {
  title: "Command Palette",
  component: CommandPalette,
};

export default meta;

type Story = StoryObj<typeof CommandPalette>;

export const Default: Story = {
  render: () => (
    <CommandPalette
      commands={collectCommands([corePlugin])}
      onClose={() => {}}
    />
  ),
};


export const EmptyResults: Story = {
  render: () => (
    <CommandPalette
      commands={[]}
      onClose={() => {}}
    />
  ),
};

export const KeyboardOnly: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 8 }}>
        Use ↑ ↓ Enter Esc keys only
      </p>
      <CommandPalette
        commands={collectCommands([corePlugin])}
        onClose={() => {}}
      />
    </div>
  ),
};

const manyCommands = Array.from({ length: 200 }, (_, i) => ({
  id: `cmd-${i}`,
  label: `Command ${i}`,
  run: () => {},
}));

export const ManyCommands: Story = {
  render: () => (
    <CommandPalette
      commands={manyCommands}
      onClose={() => {}}
    />
  ),
};
