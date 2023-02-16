import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/index';
import Center from '../src/stories/Center';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// globs style
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.default}>
      <Center>
        <Story />
      </Center>
    </ThemeProvider>
  ),
];
