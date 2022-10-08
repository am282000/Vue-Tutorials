const app = Vue.createApp({
	data() {
		return {
			userInput: '',
			secondInput: ''
		};
	},
	methods: {
		showAlert() {
			alert('Hello World');
		},
		showOutput(event) {
			this.userInput = event.target.value;
		},
		surprise() {
			this.secondInput = this.userInput;
		}
	}
});
app.mount('#assignment');
