import { mount } from '@vue/test-utils';
import Nav from "../../Nav.vue";

describe("Nav.vue", () => {

    // check if element exists - get
    it("renders a profile link", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: true,
                };
            },
        });
        const profileLink = wrapper.get("#profile");
        expect(profileLink.text()).toEqual("My Profile");
    });

    // check if element doesn't exist - find
    it("should not render a profile link", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: false,
                };
            },
        });
        const profileLink = wrapper.find("#profile");
        expect(profileLink.exists()).toBe(false);
    });

});