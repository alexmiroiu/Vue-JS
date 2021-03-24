const app = Vue.createApp({
    data() {
        return {
            inputMsg:'',
            inputMsg2: '',
            confirmedMsg: ''
        }
    },
    methods: {
        popUp() {
            return alert('Hey there !!');
        },
        getInput(event) {
            this.inputMsg = event.target.value;
        },
        getSecondInput(event) {
            this.inputMsg2 = event.target.value;
        },
        confirmMsg(){
            this.confirmedMsg = this.inputMsg2;
        }
    }

});

app.mount('#assignment')