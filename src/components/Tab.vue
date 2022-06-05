<template>
  <div class="tab">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2%;
  margin-right: 5%;
  padding: 2%;
  color: var(--red);
  line-height: 30px;
  min-height: 10vh;
}
/* tablet */
@media (max-width: 900px) {
  .tab {
    max-width: 500px;
    margin: auto;
  }
}
</style>
