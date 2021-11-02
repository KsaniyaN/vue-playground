import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '../Button.vue';
import ButtonMdx from './Button.stories.mdx';

export default {
    component: Button,      // Sb uses the component key in the story file’s default export to extract the component's description and props 
    decorators: [withKnobs],
    title: 'Button',
    // to set custom Docs page
    parameters: {
        docs: {
            page: ButtonMdx,
        }
    }
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

export const disabled = () => ({
    components: { Button },
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