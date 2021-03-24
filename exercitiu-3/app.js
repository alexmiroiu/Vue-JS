const app = Vue.createApp({
    data() {
        return {
            result : 0,

        }
    },
    methods: {
        add(num) {
            this.result += num;
        }
    },
    watch: {
        result(value) {
            if(value > 0) {
                setTimeout(() => {
                    this.result = 0;
                }, 5000);
            };
        }
    },
    computed: {
        showRes() {
            console.log(this.result);
            if(this.result < 37) {
                return 'not there yet';
            } else if(this.result === 37) {
                return this.result;
            } else {
                return 'too much !!'
            }
            
        }
    }
})

app.mount('#assignment');