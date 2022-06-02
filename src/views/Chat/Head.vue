<template>
  <div class="head">
    <DP />
    <h3>John Doe</h3>
    <p>Last seen 10 mins ago</p>
  </div>
</template>

<script>
import DP from "../../components/DP.vue";
export default {
  components: { DP },
};
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
</style>
