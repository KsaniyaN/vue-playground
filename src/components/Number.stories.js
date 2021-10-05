import { storiesOf } from '@storybook/vue3';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Number from './Number.vue';

export default {
    title: 'Form input',
    decorators: [withKnobs],
};

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within
// the component’s slot.
export const numberWithKnobs = () => ({
    components: { Number },
    props: {
        label: {
            default: text('Label', 'Age'),
        },
        value: {
            default: number('Years', '40')
        },
        note: {
            default: text('Note', 'Numbers only'),
        }
    },
    template: `<Number :value="value" :note="note">{{ label }}</Number>`,
});

export const numberRangeWithKnobs = () => ({
    components: { Number },
    props: {
        label: {
            default: text('Label', 'Age Range'),
        },
        value: {
            default: number('Years', '40', { range: true, min: 0, max: 120, step: 1 })
        },
        note: {
            default: text('Note', 'from 0 to 120'),
        }
    },
    template: `<Number :value="value" :note="note">{{ label }}</Number>`,
});