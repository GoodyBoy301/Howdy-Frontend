<template>
  <Home class="desktop" />
  <LayoutThree class="mobile" />
</template>

<script>
import LayoutThree from "../components/LayoutThree/index.vue";
import Home from "./Home.vue";
export default {
  components: { LayoutThree, Home },
};
</script>

<style scoped>
.mobile {
  display: none;
}
/* tablet */
@media (max-width: 900px) {
  .mobile {
    display: unset;
  }
  .desktop {
    display: none;
  }
}
</style>
