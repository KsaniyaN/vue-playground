// mount - getting all the child components
//import { mount } from '@vue/test-utils';
// test one component in isolation from its children
import { shallowMount } from '@vue/test-utils';
import Parent from '../../Parent.vue';

describe("Parent.vue", () => {
    it("doesn't get Child content", () => {
        const wrapper = shallowMount(Parent);
        expect(wrapper.text()).not.toContain("Child");
    })
})