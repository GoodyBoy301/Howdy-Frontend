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
  width: clamp(100px, 10vw, 150vw);
  height: clamp(100px, 10vw, 150vw);
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
/* tablet */
@media (max-width: 900px) {
  .image {
    width: clamp(40px, 5vw, 6vw);
    height: clamp(40px, 5vw, 6vw);
    font-size: 2em;
    clip-path: circle();
  }
  .scale {
    transform: scale(1);
    position: absolute;
    top: 0;
    transform-origin: 0% 0%;
  }
}
</style>
