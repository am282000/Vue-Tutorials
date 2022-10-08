const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			completeName: ''
		};
	},
	methods: {
		add(num) {
			this.counter += num;
		},
		remove(num) {
			this.counter -= num;
		},
		setName(message, event) {
			this.name = message + ' ' + event.target.value;
		},
		// formSubmit(event) {
		// 	event.preventDefault();     //Vanilla JS
		// 	alert('Successfully Signed Up');
		// },

		formSubmit() {
			alert('Successfully Signed Up');
		},
		finalInput() {
			this.completeName = this.name;
		}
	}
});

app.mount('#events');
