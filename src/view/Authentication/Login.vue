<template>
    <LoginForm/>
</template>

<script lang="ts">
    import {createComponent, onMounted,} from "@vue/composition-api";
    import LoginForm from "../../components/Authenticaton/LoginForm.vue";

    export default createComponent({
        setup() {

            onMounted(() => {
            });

            return {};
        },
        components: {
            LoginForm
        }
    });
</script>

<style lang="scss" scoped>
    /*@import "";*/
</style>
