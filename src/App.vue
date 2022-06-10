<template>
  <main>
    <ContactsNav />
    <router-view />
  </main>
</template>

<script>
import ContactsNav from "./Components/ContactsNav.vue";

export default {
  name: "App",
  props: [],
  components: { ContactsNav },
};
</script>
<style>
:root {
  --darkPrimary: #342324;
  --lightPrimary: #51312e;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-image: url("/backgroundImg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* overflow: hidden; */
  margin: 0 auto;
}

main {
  width: 1000px;
  height: 600px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 3fr 7fr;
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
}

/* Mobile Devices*/
@media (max-width: 576px) {
  ::-webkit-scrollbar {
    display: none !important;
  }
}
</style>
