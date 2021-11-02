import HelloWorld from './../HelloWorld.vue';
import {storiesOf} from '@storybook/vue3';
import {withKnobs, text} from '@storybook/addon-knobs'

const stories = storiesOf('Containers', module);

stories.addDecorator(withKnobs);

stories.add('Message with knobs', () => ({
    components: { HelloWorld },
    props: {
        msg: {
            /* 
            * The text(label, defaultValue) method from Knobs allows you to receive 
            * value dynamically in the Storybook Ui.
            */
            default: text('Text', 'Hi Xenia!')
        }
    },
    template: `<HelloWorld :msg="msg"/>`
}));