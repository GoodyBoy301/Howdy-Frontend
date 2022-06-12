<template>
  <main v-if="loggedIn">
    <ContactsNav />
    <router-view />
  </main>
  <div class="landing">
    <nav>
      <img src="/assets/brand/LogowText.svg" alt="" /><span
        >Start Messaging →</span
      >
    </nav>
    <div>
      <h1><span>Stay connected</span> with your family and friends</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iste
        perferendis. Dolorum archit
      </p>
      <button>👦🏽 Create a Profile</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ContactsNav from "./Components/ContactsNav.vue";

export default {
  name: "App",
  props: [],
  components: { ContactsNav },
  setup() {
    const loggedIn = ref(false);
    return { loggedIn };
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

/* Landing */
div.landing {
  margin: 0;
  height: 100vh;
  width: 100vw;
  /* background: #342324ee; */
  background: #000000e0;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
}
.landing > div {
  display: grid;
}
h1 {
  text-align: center;
  width: 75%;
  margin: auto;
  font-size: 3em;
  font-weight: 600;
}
h1 span {
  display: block;
}
.landing > div > p {
  width: 50%;
  margin: 1em auto;
  text-align: center;
  font-weight: 200;
  color: #dddddd;
  letter-spacing: 1.2px;
}
nav {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  display: flex;
  justify-content: space-between;
}
nav span {
  color: var(--rare);
  font-size: 1.5rem;
}
img {
  all: unset;
  width: 5em;
}
button {
  margin: 1em auto;
  background: var(--rare);
  padding: 0.7em 1em;
  width: 12.5em;
  font-size: 1.2rem;
  border-radius: 3em;
  text-align: center;
  font-weight: 200;
  color: #dddddd;
  letter-spacing: 1.2px;
}
</style>
