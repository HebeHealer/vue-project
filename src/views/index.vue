<template>
  <div @click="fToHome" class="text">这里是首页，点击可跳转到home页面{{ count }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "",
    created() {
        // console.log(this.countState);
        // console.log(this.$store.state.count);

        // this.$store.commit("increment", { time: 1 });
        this.$store.commit({
            type: "increment",
            time: 1
        });
        console.log(this.$store.state.count);
        // console.log(store.state.userInfo.name);

        // console.log(this.$store.getters.doneTodo);
    },
    computed: {
        countState () {
            return this.$store.getters.todoLength;
        },
        // 对象展开运算符，mapState与局部计算属性混合使用
        ...mapState({
            count(state) {
                return state.count;
            }
        }),
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            "doneTodos",
            "todoLength"
        ])
    },
    data () {
        return {};
    },
    methods: {
        fToHome () {
            this.$router.push({
                name: "home"
            });
        },
        ...mapMutations([
            "SOME_MUTATION"
        ]),
        ...mapActions([
            "incrementSimple"
        ])
    }
};
</script>
<style lang="less" scoped>
  .text {
    font-size: 20px;
    text-align: center;
    margin: 50px 0;
    cursor: pointer;
  }

  .text:hover {
    color: cornflowerblue;
  }
</style>
