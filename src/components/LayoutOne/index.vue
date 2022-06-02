<template>
  <div class="layout">
    <Tab
      ><img src="../../assets/Howdy.svg" width="150" height="30" /><em
        >+</em
      ></Tab
    >
    <Body
      ><div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint
        molestias accusantium, ea eos iure. Voluptatibus, autem? Fugiat error
        debitis placeat repellat minima, quaerat minus vitae maiores non iusto.
        Perferendis.
      </div></Body
    >
    <Footer>hdjbj</Footer>
  </div>
</template>

<script>
import Body from "../Body.vue";
import Footer from "../Footer.vue";
import Tab from "../Tab.vue";

import LogoText from "../../assets/Howdy.png";
export default {
  components: { Tab, Body, Footer },
};
</script>
