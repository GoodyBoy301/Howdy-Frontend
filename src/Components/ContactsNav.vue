<template>
  <aside>
    <div class="mac">
      <span style="--color: #fe5f58" /><span style="--color: #ffbc2e" /><span
        style="--color: #24c840"
      />
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
.mac {
  display: flex;
  align-items: center;
  height: 9%;
  margin-left: 5%;
}
.mac span {
  width: 12px;
  height: 12px;
  margin: 1%;
  border-radius: 100%;
  display: block;
  background: var(--color);
}
</style>
