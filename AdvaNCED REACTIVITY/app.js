const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			fullname: ''
		};
	},
	watch: {
		name(value) {
			if (value === '') {
				this.fullname = '';
			} else {
				this.fullname = value + ' ' + this.lastName;
			}
		},
		lastName(value) {
			if (value === '') {
				this.fullname = '';
			} else {
				this.fullname = this.name + ' ' + value;
			}
		}
	},
	computed: {
		// 	// wont reload function everytime for change in anything else
		// 	fullname() {
		// 		console.log('Running fullname');
		// 		if (this.name === '' || this.lasName==='') {
		// 			return '';
		// 		}
		// 		return this.name + ' ' + this.lastName;
		// 	}
	},
	methods: {
		add(num) {
			this.counter += num;
		},
		remove(num) {
			this.counter -= num;
		},
		setName(event) {
			this.name = event.target.value;
		},
		outputFullName() {
			if (this.name === '') {
				return '';
			}
			return 'Hi' + ' ' + this.name;
		},

		formSubmit() {
			alert('Successfully Signed Up');
		},
		finalInput() {
			this.completeName = this.name;
		},
		resetInput() {
			this.name = '';
		}
	}
});

app.mount('#events');
