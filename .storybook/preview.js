/** @type { import('@storybook/react').Preview } */
import '../src/styles/tailwind.css';
const preview = {
  parameters: {
    parameters: {
      actions: { argTypesRegex: '^on.*' },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
