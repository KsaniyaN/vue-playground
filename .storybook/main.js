module.exports = {
  "stories": ['../src/components/**/*.stories.js'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",   /* Knobs are already deprecated in favour of Controls */
    '@storybook/addon-actions',
  ]
}