import Vue from "vue";
import Router from "vue-router";
import student from "./students/index";

Vue.use(Router);

const routes = [
    {
        path: "/home",
        name: "index",
        component: resolve => require(["@/views/Index.vue"], resolve)
    }
];
export default new Router({
    mode: "history", // 去掉路由地址的#
    routes: [
        ...routes,
        ...student
    ]
});
