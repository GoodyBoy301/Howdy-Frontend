<template>
  <div class="createPost">
    <div class="close"><slot /></div>
    <textarea
      autofocus
      maxlength="250"
      placeholder="Whats popping?"
      spellcheck="false"
    />
    <button>Post</button>
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
  font-size: 19px;
  color: white;
  resize: none;
}
textarea::placeholder {
  opacity: 0.4;
  color: #fff;
}
button {
  position: absolute;
  bottom: 2%;
  outline: none;
  border: 0;
  color: var(--secondary);
  text-transform: uppercase;
  font-weight: 800;
  padding: 2% 5%;
  margin: auto;
  background: transparent;
  font-size: 19px;
  cursor: pointer;
}
button:hover {
  border: 1px solid var(--secondary);
}
/* tablet */
@media (max-width: 900px) {
  .createPost {
    width: 320px;
    left: calc(calc(100vw / 2) - 160px);
    color: black;
    height: 300px;
    bottom: 10vh;
    top: unset;
    box-shadow: 0px -10px 100vw 100vw #7c00ff11;
  }
}
</style>
