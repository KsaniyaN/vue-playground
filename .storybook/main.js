module.exports = {
	"stories": ['../src/components/**/stories/*.stories.@(js|mdx)'],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-knobs",   /* Knobs are already deprecated in favour of Controls */ // ToDo: remove knobs?
		'@storybook/addon-actions',
	]
}