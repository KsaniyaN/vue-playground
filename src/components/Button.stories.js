import { storiesOf } from '@storybook/vue3';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './Button.vue';

export default {
    title: 'Button',
    decorators: [withKnobs],
};

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within
// the component’s slot.
export const buttonWithKnobs = () => ({
    components: { Button },
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
