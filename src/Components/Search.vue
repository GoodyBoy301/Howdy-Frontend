<template>
  <section class="search">
    <input
      type="text"
      placeholder="Search your contats..."
      maxlength="15"
      spellcheck="false"
    />
  </section>
</template>

<script>
export default {};
</script>

<style>
.search {
  position: absolute;
  /* background: var(--lightPrimary); */
  left: 1.5%;
  right: 70%;
  top: 7.5%;
  bottom: 2.5%;
}
.search input {
  background: #342324;
  border-bottom-color: #342324;
  font-size: 1.3rem;
  text-align: left;
  color: white;
}
.search input:focus {
  color: white;
}
</style>
