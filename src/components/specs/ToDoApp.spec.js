/**
 * https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html
 */

import { mount } from '@vue/test-utils'
import TodoApp from '../ToDoApp.vue'

test('renders a todo', () => {
    /**
     * mount provides a simple "wrapper" around the app with some convenient methods for testing
     */
    const wrapper = mount(TodoApp)

    /**
     * Using data-test selectors is not required, but it can make your tests less brittle.
     * by using data-test, it's clear to other developers which elements are used in tests, and should not be changed
     */
    const todo = wrapper.get('[data-test="todo"]')

    /**
     * we are asserting, or expecting, the actual output to match what we think it should be
     */
    expect(todo.text()).toBe('Learn Vue.js 3')
})