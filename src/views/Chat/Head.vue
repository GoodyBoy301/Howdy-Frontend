<template>
  <div class="head">
    <div class="image">J</div>
    <h3>John Doe</h3>
    <p>Last seen 10 mins ago</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  width: calc(100vw / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5vh;
  position: absolute;
}
.image {
  background-color: fuchsia;
  width: calc(100vw / 9);
  height: calc(100vw / 9);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
}
</style>
