<template>
  <div>
    <aside>
      <span class="posts">
        <i style="width: 50%" />
        <i style="width: 40%" />
        <i style="width: 50%" />
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
  .new {
    margin: 0 calc(50% - 33px);
  }
  .posts i {
    width: 75%;
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
  }
}
</style>
