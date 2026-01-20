export type CommmandContext = {
  closePalette: () => void;
};

export type Command = {
  id: string;
  label: string;
  description?: string;

  run: (context: CommmandContext, input?: string) => void | Promise<void>;
};
