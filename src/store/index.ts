import { createStore } from 'vuex';
export interface State {
    count: number
}
export default createStore<State>({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
    },
});