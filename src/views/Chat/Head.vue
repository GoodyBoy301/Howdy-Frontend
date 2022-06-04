<template>
  <div class="head">
    <DP>{{ person.name[0] }}</DP>
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
    flex-direction: row;
    margin-top: 1vh;
    width: 80%;
    justify-content: flex-start;
    margin-left: 100px;
    align-items: baseline;
  }
  p {
    margin-left: auto;
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
