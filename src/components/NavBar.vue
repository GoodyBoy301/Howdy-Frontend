<template>
  <div>
    <aside>
      <span class="posts" @click="handleExplore">
        <i style="width: 100%" />
        <i style="width: 75%" />
        <i style="width: 100%" />
      </span>
      <span class="new"><Fab /></span>
      <span class="contacts"><img src="../assets/Logo.svg" /></span>
    </aside>
  </div>
</template>

<script>
import Fab from "./LayoutOne/Fab.vue";
export default {
  components: { Fab },
  methods: {
    handleExplore() {
      this.$router.push("/explore");
    },
  },
};
</script>

<style scoped>
div {
  display: none;
}
/* tablet */
@media (max-width: 900px) {
  div {
    background: var(--secondary);
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: block;
  }
  aside {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: clamp(1vw, 100vw, 300px);
    margin: auto;
    height: 100%;
  }
  span {
    padding: 10px;
    position: relative;
    display: grid;
  }
  .posts {
    width: 65%;
    cursor: pointer;
  }
  .new {
    margin: 0 calc(50% - 33px);
  }
  .posts i {
    height: 50%;
    /* padding:1px 10px; */
    background: var(--primary);
  }
  .contacts {
    display: flex;
  }
  .contacts img {
    width: 60%;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>
