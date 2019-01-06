import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import store from "./store";
import "./util/iview";
import axios from "./util/axios";

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

console.log(store.getters.todoLength);
console.log(store.getters.doneTodo);
store.dispatch("incrementSimple", { time: 10 });
console.log(store.state.count);
// console.log(process.env.VUE_APP_URL);
// store2.commit("increment");
// console.log(store2.state.count);
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
