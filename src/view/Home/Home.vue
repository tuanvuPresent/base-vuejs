<template>
    <HomeForm/>
</template>

<script lang="ts">
    import {createComponent, onMounted,} from "@vue/composition-api";
    import HomeForm from "../../components/Home/HomeForm.vue";

    export default createComponent({
        setup() {

            onMounted(() => {
            });

            return {};
        },
        components: {
            HomeForm
        }
    });
</script>

<style lang="scss" scoped>
    /*@import "";*/
</style>
