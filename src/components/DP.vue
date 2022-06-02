<template>
  <div class="image" :class="addClass"><slot /></div>
</template>

<script>
export default {
  name: "DP",
  props: ["addClass"],
};
</script>

<style scoped>
.image {
  background-color: black;
  width: calc(100vw / 9);
  height: calc(100vw / 9);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: var(--secondary);
  text-transform: capitalize;
}
.scale {
  transform: scale(0.3);
  position: absolute;
  top: 0;
  transform-origin: 0% 0%;
}
</style>
