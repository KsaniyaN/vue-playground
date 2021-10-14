import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../../HelloWorld.vue'

// group of tests
describe('HelloWorld.vue', () => {

    // test block
    it('renders props.msg when passed', () => {       
        const msg = 'new message'
        // component
        const wrapper = shallowMount(HelloWorld, {
            props: { msg }
        })
        // assertion
        expect(wrapper.text()).toMatch(msg)
    })

})
