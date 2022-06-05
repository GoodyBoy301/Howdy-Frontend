<template>
  <LayoutOne />
  <LayoutTwo>
    <router-view />
  </LayoutTwo>
  <LayoutThree />
  <NavBar />
</template>

<script>
import LayoutOne from "./components/LayoutOne/index.vue";
import LayoutTwo from "./components/LayoutTwo/index.vue";
import LayoutThree from "./components/LayoutThree/index.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { LayoutOne, LayoutTwo, LayoutThree, NavBar },
  setup() {},
};
</script>
<style>
:root {
  --primary: #7c00ff;
  --primaryO: #7c00ff27;
  --secondary: #fedcba;
  --red: #ff2360;
  /* --peru: peru; */
  --peru: var(--secondary);
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
  overflow: hidden;
}
#app > .layout {
  height: 100vh;
}
a {
  all: unset;
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

/* tablet */
@media (max-width: 900px) {
  #app {
    display: grid;
    grid-template-columns: 1fr;
  }
  #app > .layout {
    display: none;
    height: calc(100vh - 50px);
  }
  #app > .layout:nth-of-type(2) {
    display: block;
  }
  .hideOnMobile {
    display: none !important;
  }
}

/* Mobile Devices*/
@media (max-width: 576px) {
  ::-webkit-scrollbar {
    display: none !important;
  }
}
</style>
