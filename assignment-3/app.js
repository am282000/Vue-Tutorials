const app = Vue.createApp({
	data() {
		return {
			number: 0
		};
	},
	computed: {
		result() {
			if (this.number < 37) {
				return 'Not there yet';
			} else if (this.number === 37) {
				return this.number;
			} else {
				return 'Too much';
			}
		}
	},
	watch: {
		//execute only when result value changes from "not there " to anything else
		result() {
			const that = this;
			setTimeout(function () {
				that.number = 0;
			}, 2000);
		}
	},
	methods: {
		add(num) {
			this.number += num;
		}
	}
});
app.mount('#assignment');
