<template>
  <div class="container">
    {{ count }}
  </div>
  <button @click="count++">按钮</button>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style lang="less" scoped>
.container {
  height: 300px;
  width: 300px;
  background-color: red;
}
</style>
