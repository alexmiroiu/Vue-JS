const app = Vue.createApp({
    data(){
        return {
            nume: 'Alex',
            varsta: 32 ,
            imageLink:'vueimage.png'
        }
    },
    methods: {
        addToAge(){
            return this.varsta + 5;
        },
        randomNum(){
            return Math.floor(Math.random()*10);
        },

    }
});

app.mount('#assignment');