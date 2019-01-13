import { CHANGE_SEX, GET_STUDENTS, DO_CHANGE_SEX } from "../mutation-types";
export default {
    state: {
        list: [
            { name: "xiaoming", age: "25", sex: "girl" },
            { name: "zhangzhang", age: "21", sex: "boy" },
            { name: "zhangyu", age: "25", sex: "boy" },
            { name: "luoyi", age: "22", sex: "boy" },
            { name: "huuo", age: "25", sex: "girl" },
            { name: "xueyu", age: "23", sex: "girl" }
        ]
    },
    mutations: {
        [CHANGE_SEX](state, payload) {
            state.list[1].sex = payload.sex;
        }
    },
    getters: {
        [GET_STUDENTS](state, getters) {
            state.list.filter((item) => item.sex === "girl");
        }
    },
    actions: {
        [DO_CHANGE_SEX]({ commit }, payload) {
            commit("CHANGE_SEX", payload);
        }
    }
};
