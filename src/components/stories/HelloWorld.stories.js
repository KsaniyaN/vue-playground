import HelloWorld from './../HelloWorld.vue';

export default {
	title: 'Hello World',
	component: HelloWorld
}

export const helloWorld = () => ({
	components: {HelloWorld},
	props: {
		message: {
			default: "Hi Xenia! :)",
		}
	},
	template: `
        <HelloWorld :message="message"/>`
})