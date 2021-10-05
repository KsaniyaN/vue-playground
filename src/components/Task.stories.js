/**
 * https://storybook.js.org/tutorials/intro-to-storybook/vue/en/simple-component/
 */

import Task from './Task.vue';
import '../assets/index.css';
import { action } from '@storybook/addon-actions';

export default {
    component: Task,
    // excludeStories -- information required by the story, but should not be rendered by the Storybook app.
    excludeStories: /.*Data$/,
    title: 'Task',
    // events that are going to be mapped in Storybook UI
    argTypes: {
        onPinTask: {},
        onArchiveTask: {}
    }
};

// Actions work via supplying special Storybook-generated “action” arguments - args
export const actionsData = {
    onPinTask: action('pin-task'),
    onArchiveTask: action('archive-task'),
};

const Template = args => ({
    components: { Task },
    setup() {
        return { args, ...actionsData };
    },
    template: '<Task v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2020, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        id: '2',
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        id: '3',
        state: 'TASK_ARCHIVED',
    },
};