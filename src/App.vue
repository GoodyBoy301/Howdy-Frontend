<template>
  <main v-if="loading" class="loading">
    <!-- <div class="spinner"></div> -->
  </main>
  <main v-else-if="loggedIn">
    <ContactsNav :setLoggedIn="setLoggedIn" />
    <router-view :setLoggedIn="setLoggedIn" />
  </main>
  <Landing v-else :loggedIn="loggedIn" :setLoggedIn="setLoggedIn" />
</template>

<script>
import { ref } from "vue";
import ContactsNav from "./Components/ContactsNav.vue";
import Landing from "./Components/Landing.vue";

import fetchLoggedIn from "./modules/fetchLoggedIn.js";
import "./utils/db.js";

export default {
  name: "App",
  props: [],
  components: { ContactsNav, Landing },
  setup() {
    const loggedIn = ref();
    const setLoggedIn = () => {
      loggedIn.value = !loggedIn.value;
    };

    const loading = ref(true);
    fetchLoggedIn().then((val) => {
      loggedIn.value = val;
      loading.value = false;
    });

    return { loggedIn, setLoggedIn, loading };
  },
  // mounted() {
  //   document
  //     .querySelector(".spinner")
  //     .animate(
  //       [{ transform: "rotate(-45deg)" }, { transform: "rotate(404deg)" }],
  //       {
  //         duration: 1000,
  //         iterations: Infinity,
  //         direction: "alternate",
  //         easing: "ease-in-out",
  //       }
  //     );
  // },
};
</script>
<style>
:root {
  --darkPrimary: #342324;
  --lightPrimary: #51312e;
  --rare: #8175ff;
  --error: hotpink;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  /* overflow-x: hidden; */
}
body {
  background-image: url("/assets/backgroundImg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
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

.loading {
  /* background: #51312eee; */
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(13px);
}
.spinner {
  border: 10px solid var(--rare);
  border-top-color: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

a {
  all: unset;
}
.hidden {
  display: none;
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
@media (max-width: 1024px) {
  body {
    /* background: transparent; */
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
  #app,
  body {
    overflow: hidden !important;
  }
}
</style>
