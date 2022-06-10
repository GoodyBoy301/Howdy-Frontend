<template>
  <aside>
    <div class="mac">
      <span style="--color: #fe5f58" /><span style="--color: #ffbc2e" /><span
        style="--color: #24c840"
      />
    </div>
    <div class="heading">
      <h2>Contacts</h2>
      <img src="/icons/search.svg" alt="" />
      <img src="/icons/plus.svg" alt="" />
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style>
aside {
  background: var(--darkPrimary);
  border-radius: 15px 0 0 15px;
  width: 100%;
  height: 100%;
}
div {
  margin: 5%;
}
.mac {
  display: flex;
  align-items: flex-end;
  height: 4%;
}
.mac span {
  width: 12px;
  height: 12px;
  margin: 1%;
  border-radius: 50%;
  display: block;
  background: var(--color);
}
.heading {
  display: flex;
}
h2 {
  font-weight: 500;
}
.heading img {
  width: 2em;
  height: 2em;
  padding: 0.6em;
  background: var(--lightPrimary);
  border-radius: 50%;
  fill: white;
  stroke: black;
}
.heading img:first-of-type {
  margin: 0 0.55em 0 auto;
}
</style>
