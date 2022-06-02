<template>
  <div class="fab">
    <span />
    <span />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fab {
  height: 50px;
  width: 50px;
  background: var(--primary);
  position: absolute;
  bottom: 8px;
  border-radius: 100%;
  left: 8px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab:active {
  animation: rotate 0.1s ease-in-out both;
}
span {
  width: 30px;
  height: 5px;
  background: var(--secondary);
  position: absolute;
  left: 10px;
  margin: auto;
}
span:first-of-type {
  transform: rotateZ(90deg);
}
@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(90deg);
  }
}
</style>
