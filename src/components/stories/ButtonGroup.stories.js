import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './../Button.vue';
import ButtonGroup from './../ButtonGroup.vue';

export default {
    title: 'ButtonGroup',
    component: ButtonGroup,      // Sb uses the component key in the story file’s default export to extract the component's description and props 
    subcomponents: { Button },
    decorators: [withKnobs],
    // to remove/override docs
    // parameters: {
    //     docs: {
    //         page: null
    //     }
    // }
};

// default story
export const buttonGroup = () => ({
    components: { Button, ButtonGroup },
    props: {
        isDisabled: {
            default: boolean('Disabled', false),
        },
        text: {
            default: text('Label', 'Hello Storybook'),
        },
    },
    template: `
    <Button :isDisabled="true">
        {{ text }}
    </Button>
    <Button :isDisabled="false">
        {{ text }}
    </Button>`,
});

