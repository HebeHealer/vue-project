import Vue from "vue";
import Vuex from "vuex";
import { SOME_MUTATION } from "./mutation-types";

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex);

const myStore = new Vuex.Store({
    state: {
        count: 0,
        todoList: [
            { id: 1, text: "XXXX", done: true },
            { id: 2, text: "xxxx", done: false}
        ]
    },
    mutations: {
        increment (state, payload) {
            state.count += payload.time;
        },
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        [SOME_MUTATION](state) {
            state.count = 5;
        }
    },
    getters: {
        doneTodos(state) {
            return state.count;
        },
        todoLength(state, getters) {
            return getters.doneTodos.length;
        }
    },
    actions: {
        incrementAsync(context) {
            context.commit("increment");
        },
        incrementSimple({ commit }, payload) {
            commit("increment", payload);
        }
    }
});

export default myStore;
