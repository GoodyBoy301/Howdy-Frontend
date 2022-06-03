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
  margin: 2%;
  margin-right: 5%;
  padding: 2%;
  color: var(--red);
}
</style>
