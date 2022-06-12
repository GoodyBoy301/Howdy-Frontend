<template></template>

<script>
export default {};
</script>

<style>
div.landing {
  margin: 0;
  height: 100vh;
  width: 100vw;
  /* background: #342324ee; */
  background: #000000e0;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
  will-change: width;
  transition: all 0.9 ease-out;
}
.landing > div {
  display: grid;
}
h1 {
  text-align: center;
  width: 75%;
  margin: auto;
  font-size: 3em;
  font-weight: 600;
}
h1 span {
  display: block;
}
.landing > div > p {
  width: 50%;
  margin: 1em auto;
  text-align: center;
  font-weight: 200;
  color: #dddddd;
  letter-spacing: 1.2px;
}
nav {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  display: flex;
  justify-content: space-between;
}
nav span {
  color: var(--rare);
  font-size: 1.5rem;
  position: fixed !important;
  right: 10px;
  float: right;
}
img {
  all: unset;
  width: 5em;
}
button {
  margin: 1em auto;
  background: var(--rare);
  padding: 0.7em 1em;
  width: 12.5em;
  font-size: 1.2rem;
  border-radius: 3em;
  text-align: center;
  font-weight: 200;
  color: #dddddd;
  letter-spacing: 1.2px;
}

div.landing.form {
  margin: 0;
  height: 100vh;
  /* width: 50vw; */
  /* background: #342324ee; */
  background: #000000e0;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
