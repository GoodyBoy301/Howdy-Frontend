<template>
  <div class="head">
    <DP class="hideOnMobile">{{ person.name[0] }}</DP>
    <h3>{{ person.name }}</h3>
    <i>@{{ person.username }}</i>
    <p>Last seen 10 mins ago</p>
  </div>
</template>

<script>
import DP from "../../components/DP.vue";

export default {
  props: ["person"],
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
i,
p {
  font-size: 0.7em;
}
/* tablet */
@media (max-width: 900px) {
  .head {
    margin-top: 1vh;
    width: 100vw;
    justify-content: flex-start;
    align-items: baseline;
    align-items: center;
  }
  h3 {
    font-size: 1.8em;
    padding: 0 10px;
  }
  i {
    display: none;
  }
}
</style>
