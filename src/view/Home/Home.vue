<template>
    <div>
        <HomeComponent/>
    </div>
</template>

<script lang="ts">
import {createComponent, onMounted} from "@vue/composition-api";
import HomeComponent from "@/components/Home/HomeComponent.vue";

export default createComponent({
    setup() {
        onMounted(() => {
        });
        return {};
    },
    components: {
        HomeComponent
    }
});
</script>

<style lang="scss" scoped>
</style>
