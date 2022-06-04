<template>
  <div class="text" :class="view">
    Lorem ipsum dolor sit amet consectetur adipiscing amet
  </div>
</template>

<script>
export default {
  props: ["viewed"],
  computed: {
    view() {
      if (this.viewed) return "view";
      else return "";
    },
  },
};
</script>

<style>
.text {
  width: 70%;
  color: #444;
  background: white;
  margin: 10px;
  padding: 5px 0px 5px 10px;
  font-size: 14px;
  border-radius: 20px;
  text-align: left;
  border-bottom-left-radius: 0%;
}
.view {
  margin-left: calc(auto - 10px);
  margin-left: auto;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0%;
}
/* tablet */
@media (max-width: 900px) {
  .text {
    width: 300px;
  }
}
</style>
