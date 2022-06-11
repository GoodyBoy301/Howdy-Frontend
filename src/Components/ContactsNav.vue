<template>
  <aside>
    <div class="mac">
      <span style="--color: #fe5f58" /><span style="--color: #ffbc2e" /><span
        style="--color: #24c840"
      />
    </div>
    <div class="heading">
      <h2>Contacts</h2>
      <img src="/assets/icons/search.svg" alt="" />
      <img src="/assets/icons/plus.svg" alt="" />
    </div>
    <ul>
      <li v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i">
        <img src="/assets/DPs/male02.png" alt="" class="dp" />
        <div>
          <h3>Kush Gibson</h3>
          <p>Lorem ipsum dol...</p>
        </div>
        <div><p>Yesterday</p></div>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style>
aside {
  background: #342324ee;
  border-radius: 15px 0 0 15px;
  width: 100%;
  height: inherit;
  backdrop-filter: blur(13px);
  overflow: hidden;
  /* cursor: url("/cursor.png"), auto; */
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
  margin-bottom: 0;
}
h2 {
  font-weight: 500;
}
img {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  object-fit: cover;
}
.heading img {
  padding: 0.6em;
  background: var(--lightPrimary);
  fill: white;
  stroke: black;
}
.heading img:first-of-type {
  margin: 0 0.55em 0 auto;
}
ul {
  overflow-y: scroll;
  max-height: calc(95%);
  list-style: none;
  margin-top: 0;
}
li {
  height: 4em;
  margin: 1.5%;
  padding: 3.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
  cursor: pointer;
}
li:hover {
  background: var(--darkPrimary);
  border-radius: 0.5em;
}
li img {
  width: 3em;
  height: 3em;
  padding: 0.25em;
  box-sizing: border-box;
  object-fit: contain;
}
img.dp {
  background: yellow !important;
}
li > div {
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 60%;
}
li h3 {
  font-weight: 500;
}
li p {
  font-weight: 200;
  justify-self: flex-end;
}
</style>
