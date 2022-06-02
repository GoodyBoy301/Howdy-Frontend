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
  padding-bottom: 10vh;
  height: 100vh;
  overflow: scroll;
}
</style>
