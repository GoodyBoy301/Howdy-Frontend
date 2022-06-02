<template>
  <div class="createPost">
    <div class="close"><slot /></div>
    <textarea
      autofocus
      max-length="50"
      placeholder="Whats popping?"
      spellcheck="false"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.createPost {
  height: 50vh;
  width: 30vw;
  background: var(--primary);
  position: fixed;
  top: 25%;
  border-radius: 5%;
  left: calc(calc(100vw / 6) - 15vw);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  transform: scale(0.5) rotateZ(45deg);
  transform-origin: 100% 0%;
  height: 70px;
  width: 70px;
}
textarea,
textarea:active {
  min-height: 80%;
  max-height: 80%;
  min-width: 90%;
  max-width: 90%;
  background: var(--primaryO);
  opacity: 0.8;
  border: 0;
  outline: none;
  font-size: 20px;
  color: var(--secondary);
  resize: none;
}
</style>
