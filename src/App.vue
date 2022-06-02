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
:root {
  --primary: #7c00ff;
  --primaryO: #7c00ff27;
  --secondary: #fedcba;
}
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
  background-color: var(--secondary);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
#app > .layout {
  height: 100vh;
}

/* CUSTOM SCROLL BAR */
::-webkit-scrollbar {
  width: 3px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-track:hover {
  background: var(--secondary) !important;
  transition: all 0.5s ease-in-out !important;
}
::-webkit-scrollbar-thumb {
  background: var(--primaryO) !important;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--primary) !important;
  transition: all 0.5s ease-in-out !important;
}
</style>
