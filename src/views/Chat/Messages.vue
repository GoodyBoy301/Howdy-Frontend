<template>
  <div class="messages">
    <article>
      <aside />
      <aside />
      <Text :viewed="false" />
      <Text :viewed="true" />
      <Text :viewed="false" />
      <Text :viewed="false" />
      <Text :viewed="true" />
      <Text :viewed="true" />
      <Text :viewed="false" />
      <Text :viewed="true" />
      <Text :viewed="false" />
      <Text :viewed="true" />
      <Text :viewed="false" />
      <Text :viewed="true" />
      <Text :viewed="false" />
    </article>
  </div>
</template>

<script>
import Text from "./Text.vue";
export default {
  components: { Text },
};
</script>

<style scoped>
.messages {
  background: var(--peru);
  height: 90vh;
  width: 33%;
  margin: auto;
  position: fixed;
  top: 10vh;
  padding: 0;
}
article {
  overflow: scroll;
  height: calc(90vh + 18px);
  padding-top: 20vh;
  padding-bottom: calc(65px + 18px);
  display: flex;
  flex-direction: column-reverse;
  margin-top: 1px;
}
aside:first-of-type {
  height: 20vh;
  width: calc(100% - 20px);
  background: #fedcbaee;
  box-shadow: inset 0px 20px 20px 20px #fedcbaee, 0px 5px 5px 2px #fedcbaee;
  position: absolute;
  left: 10px;
  top: 0;
}
aside:nth-of-type(2) {
  height: 10vh;
  width: calc(100% - 3px);
  background: #fedcbaee;
  position: absolute;
  left: 0px;
  top: 0;
}
::-webkit-scrollbar-thumb:hover {
  background: black !important;
}

/* tablet */
@media (max-width: 900px) {
  .messages {
    width: 100%;
    height: calc(90vh - 25px);
    top: calc(10vh - 25px);
  }
  article {
    padding-top: 0vh;
    padding-bottom: calc(95px + 18px);
    max-width: 500px;
    margin: auto;
  }
  aside:first-of-type {
    height: 10vh;
    width: calc(100% - 20px);
    background: #cd853fee;
    box-shadow: inset 0px 20px 20px 20px #cd853fee, 0px 5px 5px 2px #cd853fee;
    position: absolute;
    left: 10px;
    top: 0;
    display: none;
  }
  aside:nth-of-type(2) {
    height: 5vh;
    width: calc(100% - 3px);
    background: #cd853fee;
    position: absolute;
    left: 0px;
    top: 0;
    display: none;
  }
}
</style>
