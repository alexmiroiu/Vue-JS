const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'https://www.google.ro/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()*2;
            if(randomNumber < 1) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    },

});


app.mount('#user-goal');
