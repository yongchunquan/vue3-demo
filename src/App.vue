<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <div class="main">main</div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-link to="/">/**</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/login">login</router-link>
    <router-view></router-view>

    <van-button icon="plus" type="primary" />
    <van-button icon="plus" type="primary">按钮</van-button>
    <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="info">
    按钮
    </van-button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import utils from './assets/script/utils';
import config from './assets/script/config';
console.info("config", config);

export default {
    name: "App",
    components: {
        HelloWorld,
    },
    created: function () {
        console.info("uuid", utils.uuid());
        console.info("parseDate", utils.getDate('yyyy-MM-dd hh:mm:ss', 'm', -1));
    },
};
</script>
<style lang="scss">
// @import url(./assets/style/index.sass);
</style>