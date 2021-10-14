import { mount } from '@vue/test-utils';
import Message from '../../Message.vue';

describe("Mesage.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(Message, {
            props: {
                msg: "Hello Friends"
            }
        });
        expect(wrapper.text()).toContain("Hello Friends");
    })
})