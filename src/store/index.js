import Vue from "vue";
import Vuex from "vuex";
import students from "./students/index";
import {
    SOME_MUTATION,
    INCREMENT_SIMPLE,
    INCREMENT,
    DONE_TODOS,
    TODO_LENGTH,
    INCREMENT_ASYNC
} from "./mutation-types";

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex);

const store = {
    state: {
        count: 0,
        todoList: [
            { id: 1, text: "XXXX", done: true },
            { id: 2, text: "xxxx", done: false}
        ]
    },
    mutations: {
        [INCREMENT] (state, payload) {
            state.count += payload.time;
        },
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        [SOME_MUTATION](state) {
            state.count = 5;
        }
    },
    getters: {
        [DONE_TODOS](state) {
            return state.count;
        },
        [TODO_LENGTH](state, getters) {
            return getters.doneTodos.length;
        }
    },
    actions: {
        [INCREMENT_ASYNC](context) {
            context.commit("INCREMENT");
        },
        [INCREMENT_SIMPLE]({ commit }, payload) {
            commit("INCREMENT", payload);
        }
    }
};
const myStore = new Vuex.Store({
    store,
    students
});

export default myStore;
