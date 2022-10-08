const app = Vue.createApp({
	data() {
		return {
			courseGoal: 'I am Done.',
			myGoalA: '<i>Padhle bhai !!</i>',
			myGoalB: '<i>Bs kr bhai tham jaa !!</i>',
			vueLink: 'https://vuejs.org/'
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				// return 'You need to Learn more';
				return this.myGoalA;
			} else {
				// return 'You are already a Master !';
				return this.myGoalB;
			}
		}
	}
});
app.mount('#user-goal');
