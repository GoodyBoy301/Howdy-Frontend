<template>
  <Home class="desktop" />
  <LayoutOne class="mobile" />
</template>

<script>
import LayoutOne from "../components/LayoutOne/index.vue";
import Home from "./Home.vue";
export default {
  components: { LayoutOne, Home },
  data() {
    return {
      route: "",
    };
  },
  mounted() {
    this.route = this.$route.name;
    console.log(this.route);
  },
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
