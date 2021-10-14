// https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html
// https://www.youtube.com/watch?v=QIDhzBg5eWY

import { mount } from '@vue/test-utils';
import TodoApp from '../../TodoApp.vue';

describe("TodoApp.vue", () => {

    // beforeEach hook to reduce redundancy of code
    let wrapper;
    let todo;

    beforeEach(() => {
        wrapper = mount(TodoApp);
        todo = wrapper.get('[data-test="todo"]');
    })

    it("should render todo text", () => {
        expect(todo.text()).toBe("Learn Vue.js 3")
    });

    // async - waiting for a new todo to be submitted
    it("should add new todo", async () => {
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

        await wrapper.get('[data-test="new-todo"]').setValue('New Todo');
        await wrapper.get('[data-test="form"]').trigger('submit');

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3);
    });

    // ToDo: check if input is cleared after submit

    // Complete ToDo - checkbox
    it("should be able to complete todo", async () => {
        await wrapper.get('[data-test="todo-checkbox"]').setValue(true);
        expect(todo.classes()).toContain('completed');
    });

})

// test('renders a todo', () => {
//     /**
//      * mount provides a simple "wrapper" around the app with some convenient methods for testing
//      */
//     const wrapper = mount(TodoApp)

//     /**
//      * Using data-test selectors is not required, but it can make your tests less brittle.
//      * by using data-test, it's clear to other developers which elements are used in tests, and should not be changed
//      */
//     const todo = wrapper.get('[data-test="todo"]')

//     /**
//      * we are asserting, or expecting, the actual output to match what we think it should be
//      */
//     expect(todo.text()).toBe('Learn Vue.js 3')
// })