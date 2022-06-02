<template>
  <LayoutOne />
  <LayoutTwo>
    <router-view />
  </LayoutTwo>
  <LayoutThree />
</template>

<script>
import LayoutOne from "./components/LayoutOne/index.vue";
import LayoutTwo from "./components/LayoutTwo/index.vue";
import LayoutThree from "./components/LayoutThree/index.vue";
export default {
  name: "App",
  components: { LayoutOne, LayoutTwo, LayoutThree },
  setup() {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fedcba;
  display: flex;
}
#app > .layout {
  flex: 1;
  min-height: 100vh;
}
</style>
