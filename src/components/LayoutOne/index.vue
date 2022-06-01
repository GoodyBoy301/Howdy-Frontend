<template>
  <div class="layout">
    <Tab><h1>LayoutOne</h1></Tab>
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
export default {
  components: { Tab, Body, Footer },
};
</script>
