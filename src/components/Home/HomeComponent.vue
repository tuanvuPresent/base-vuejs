<template>
  <div>{{ $t("hello") }}</div>
</template>

<script lang="ts">
import { createComponent, onMounted } from "@vue/composition-api";
export default createComponent({
  setup() {
    onMounted(() => {});
    return {};
  },
  components: {},
});
</script>

<style lang="scss" scoped>
</style>
