<template>
  <main v-if="loggedIn">
    <ContactsNav />
    <router-view />
  </main>
  <Landing v-else :loggedIn="loggedIn" :setLoggedIn="setLoggedIn" />
</template>

<script>
import { ref } from "vue";
import ContactsNav from "./Components/ContactsNav.vue";
import Landing from "./Components/Landing.vue";

export default {
  name: "App",
  props: [],
  components: { ContactsNav, Landing },
  setup() {
    const loggedIn = ref(false);
    const setLoggedIn = () => {
      loggedIn.value = !loggedIn.value;
    };

    return { loggedIn, setLoggedIn };
  },
};
</script>
<style>
:root {
  --darkPrimary: #342324;
  --lightPrimary: #51312e;
  --rare: #8175ff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  overflow-x: hidden;
}
body {
  background-image: url("/assets/backgroundImg.jpg");
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
  display: grid;
  grid-template-columns: 3fr 7fr;
  overflow: hidden;
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
/* ::-webkit-scrollbar-track:hover {
  background: var(--lightPrimary) !important;
  transition: all 0.5s ease-in-out !important;
} */
::-webkit-scrollbar-thumb {
  background: transparent !important;
  transition: all 2s ease-in-out !important;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--darkPrimary) !important;
}
.mobile {
  display: none;
}

/* tablet */
@media (max-width: 900px) {
  body {
    background: transparent;
    font-size: calc(0.5em + 1vw);
  }
  main {
    width: 100vw;
    height: 100vh;
    grid-template-columns: 6fr 15fr;
  }
}

/* Mobile Devices*/
@media (max-width: 576px) {
  ::-webkit-scrollbar {
    display: none !important;
  }
  main {
    grid-template-columns: 0fr 1fr;
  }
  .mobile {
    display: block;
  }
}
</style>
