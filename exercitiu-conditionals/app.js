const app = Vue.createApp({
    data() {
        return {
            textInput:'',
            tasks:[],
            clicked: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.textInput);
            console.log(this.tasks)
        },
        whenClicked() {
            this.clicked = !this.clicked;
        }
    },
})

app.mount("#assignment");