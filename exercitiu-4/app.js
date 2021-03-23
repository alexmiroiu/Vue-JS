const app = Vue.createApp({
    data() {
        return {
            classes: '',
            classUser1: false,
            classUser2: false,
            isVisible: false,
            background: ''
        }
    },
    methods: {
        classSelected(c) {
            if(c === 'user1') {
                return {user1: true};
            } else if (c === 'user2') {
                return {user2: true};
            }
        },
        visibility() {
            this.isVisible = !this.isVisible;
            console.log(this.isVisible);
        },
        
        
    },
    computed: {
       show() {
           return {
               visible: this.isVisible,
               hidden: !this.isVisible
           }
       }
    }
})

app.mount('#assignment');