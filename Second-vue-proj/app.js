const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Finish the course and master Vue',
            vueLink: 'https://www.google.ro/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()*2;
            if(randomNumber < 1) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },

});


app.mount('#user-goal');
