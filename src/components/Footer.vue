<template>
  <div class="footer">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: calc(100% / 3);
  background: var(--primaryO);
  color: var(--red);
}
</style>
