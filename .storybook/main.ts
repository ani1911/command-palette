const config = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    // '@storybook/addon-essentials', // skip
    // '@storybook/addon-links',      // skip
    // '@chromatic/storybook',        // skip
  ],
  framework: "@storybook/react-vite",
};
export default config;
