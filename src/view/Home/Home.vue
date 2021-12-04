<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted } from "@vue/composition-api";
import HomeComponent from "@/components/Home/HomeComponent.vue";
import useExampleAPI from "@/api/useExamleAPI";

export default createComponent({
  setup() {
    onMounted(() => {
      const useExample = useExampleAPI();
      useExample.getExampleData();
    });
    return {};
  },
  components: {
    HomeComponent,
  },
});
</script>

<style lang="scss" scoped>
</style>
