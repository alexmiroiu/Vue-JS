export default {
    increment(state) {
        state.counter++;
    },
    increaseByTen(state, payload) {
        state.counter += payload.value;
    },
}