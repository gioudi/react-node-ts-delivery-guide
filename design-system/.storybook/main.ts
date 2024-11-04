import { mergeConfig } from 'vite';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: { },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
    });
  },
};

export default config;
