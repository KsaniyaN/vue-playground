import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import Button from '../Button.vue';

export default {
	title: 'Button',
	// Sb uses the component key in the story file’s default export to extract the component's description and props
	component: Button,
	decorators: [withKnobs]
};

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within the component’s slot.
export const active = () => ({
	components: {Button},

	props: {
		isDisabled: {
			default: boolean('Disabled', false),
		},
		text: {
			default: text('Label', 'Hello Storybook'),
		},
	},

	template: `<Button :isDisabled="isDisabled">{{ text }}</Button>`,
});

export const disabled = () => ({
	components: {Button},

	props: {
		isDisabled: {
			default: boolean('Disabled', true),
		},

		text: {
			default: text('Label', 'Disabled'),
		},
	},
	template: `<Button :isDisabled="isDisabled">{{ text }}</Button>`,
});