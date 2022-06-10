<template>

    <router-view />

</template>

<script>

</script>
<style>
:root {
 
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
