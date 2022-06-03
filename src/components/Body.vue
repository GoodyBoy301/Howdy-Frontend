<template>
  <div class="body">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  font-size: 16px;
  margin: 2%;
  margin-top: 0;
  padding-bottom: 10vh;
  height: 100vh;
  overflow: scroll;
}
</style>
