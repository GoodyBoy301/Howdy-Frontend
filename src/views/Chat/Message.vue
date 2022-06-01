<template>
  <div class="message">
    <textarea class="new" />
    <em class="send">></em>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.message {
  position: fixed;
  bottom: 0;
  /* background: lightsalmon; */
  width: calc(100% / 3);
  display: flex;
  align-items: center;
}
.new {
  height: 10vh;
  width: 80%;
  margin: 1%;
}
.send {
  font-size: 4em;
  line-height: 1em;
  margin: 0 auto;
}
</style>
