const app = Vue.createApp({
	data() {
		return {
			name: 'Ashish',
			age: 21,
			imgURL:
				'https://i.picsum.photos/id/175/200/300.jpg?hmac=jzS4h5cKiC2EYjpW11ejlay_4MSHkmfCWei9e7n8cE0'
		};
	},
	methods: {
		calcAge() {
			return this.age + 5;
		},
		calcRandom() {
			return Math.floor(Math.random() * 100);
		}
	}
});
app.mount('#assignment');
