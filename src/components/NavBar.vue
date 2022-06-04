<template>
  <div></div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: none;
}
/* tablet */
@media (max-width: 900px) {
  div {
    background: var(--secondary);
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: block;
  }
}
</style>
