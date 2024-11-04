import { mergeConfig } from 'vite';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async viteFinal(config: any) {
    return mergeConfig(config, {
    });
  },
};

export default config;
