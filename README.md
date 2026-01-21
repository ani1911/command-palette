# Command Palette

A keyboard-first **Command Palette** inspired by tools like VS Code and Spotlight, built to provide fast command discovery and execution within an application.

The project focuses on clean architecture, predictable behavior, accessibility, and performance, making it suitable for real-world frontend systems.

---

## ✨ Overview

The Command Palette allows users to open a global search interface using a keyboard shortcut, type commands, navigate results using the keyboard, and execute actions instantly.

It is designed as a reusable system rather than a hardcoded UI component.

---

## 🚀 Key Features

- Global keyboard shortcut (`Ctrl + K` / `Cmd + K`)
- Real-time fuzzy search with ranked results
- Keyboard-only navigation (↑ ↓ Enter Esc)
- Plugin-based command architecture
- Async command execution support
- Accessible, screen-reader-friendly UI
- Measured and guarded performance
- Interactive component documentation via Storybook

---

## 🧠 Design Philosophy

### Keyboard-First UX

The entire interaction flow is designed to work without a mouse:

- Focus is managed programmatically
- Navigation is state-driven
- There are no keyboard dead ends

### Separation of Concerns

- Commands are defined independently of the UI
- The UI only renders and executes commands
- Business logic is isolated and reusable

This makes the system scalable and easy to extend.

---

## 🧱 Architecture

### Command System

Commands are defined as structured objects and registered through a plugin mechanism.

Each command:

- Has a unique identifier
- Exposes a human-readable label
- Defines its own execution logic
- Can run synchronously or asynchronously

This approach allows new commands to be added without modifying the UI layer.

---

### Fuzzy Search & Ranking

A custom fuzzy matching algorithm is used to rank commands based on user input.

Characteristics:

- Characters must match in order
- Consecutive matches receive higher scores
- Non-matching commands are excluded early
- Results are deterministic and predictable

This ensures fast and intuitive search behavior.

---

## ♿ Accessibility

Accessibility is built into the core interaction model.

- Uses semantic ARIA roles for combobox and listbox patterns
- Active items are announced to screen readers
- Fully operable using keyboard alone
- Verified through Storybook accessibility tooling

---

## ⚡ Performance

Search and ranking are measured per keystroke using high-resolution timing.

- Results are computed within a guarded threshold
- Performance regressions are detectable during development
- Large command lists are tested via Storybook scenarios

---

## 📘 Storybook

All components are documented and tested in isolation using Storybook.

Storybook includes:

- Default usage
- Empty state
- Keyboard-only interaction
- Large command list (performance scenario)

A public Storybook build is available via Chromatic for easy review.

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Storybook
- Chromatic

---

## ▶️ Running the Project

## ▶️ Running the Project

Install dependencies:

````bash
npm install



Start development server:
```bash
npm run dev

Run Storybook
```bash
npm install
````
