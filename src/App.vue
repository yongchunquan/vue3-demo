<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <div class="main">main</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
    created: function () {
        //   {"BASE_URL":"/","MODE":"development","DEV":true,"PROD":false}
        console.info(JSON.stringify(import.meta.env.VITE_APP_TITLE));
        console.info(JSON.stringify(process.env.VITE_APP_TITLE));
    },
};
</script>
<style lang="scss">
// @import url(./assets/style/index.sass);
</style>