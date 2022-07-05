<template>
  <section class="search">
    <slot />
  </section>
</template>

<script>
export default {
  props: ["searchTerm"],
};
</script>

<style>
.search {
  position: absolute;
  left: 1.5%;
  right: 70%;
  top: 4%;
  bottom: 2.5%;
}
.search input {
  background: #342324;
  border-bottom-color: #342324;
  font-size: 1.3rem;
  text-align: left;
  color: white;
  width: 275%;
  min-width: unset;
}
.search input:focus {
  color: white;
}
/* Mobile Devices*/
@media (max-width: 576px) {
  .search {
    top: 7.5%;
  }
}
</style>
