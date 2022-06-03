<template>
  <div class="layout">
    <Tab><h5>Logout</h5></Tab>
    <Body
      ><div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
        labore vitae dolorum eaque fugiat debitis, pariatur beatae sapiente esse
        obcaecati molestias est omnis eos, tenetur soluta perferendis! Quo,
        adipisci natus?
      </div></Body
    >
  </div>
</template>

<script>
import Body from "../Body.vue";
import Tab from "../Tab.vue";
export default { name: "LayoutOne", components: { Tab, Body } };
</script>

<style scoped>
h5 {
  margin-left: auto;
  cursor: pointer;
}
</style>
