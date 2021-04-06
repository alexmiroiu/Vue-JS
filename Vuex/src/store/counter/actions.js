export default {
    increment(context) {
        setTimeout(() => {
        context.commit('increment');
        }, 2000 );          
    },
    increaseByTen(context, payload) {
        context.commit('increaseByTen', payload);
    },

}