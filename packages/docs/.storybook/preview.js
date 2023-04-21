import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
      date: /Date$/,
    },

  docs: {
    theme: themes.dark,
  }
}