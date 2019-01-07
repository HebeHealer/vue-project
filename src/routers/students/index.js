
const student = [
    {
        path: "/students",
        name: "学生列表",
        component: resolve => require(["@/views/student/Index.vue"], resolve)
    }
];

export default student;
