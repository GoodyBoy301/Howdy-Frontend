<template>
  <form class="login">
    <img src="/assets/icons/x.svg" alt="" class="x" @click="toggleForm" />
    <h2>{{ hasAccount ? "Welcome Back" : "Create An Account" }}</h2>
    <SignUp :hasAccount="!hasAccount" />
  </form>
</template>

<script>
import SignUp from "./SignUp.vue";
export default {
  name: "Login",
  props: ["hasAccount", "toggleForm"],
  components: { SignUp },
};
</script>

<style>
form {
  margin: 0;
  height: 100vh;
  width: 50vw;
  background: #ffffffcc;
  /* background: transparent; */
  backdrop-filter: blur(13px);
  position: absolute;
  top: 0;
  left: 0;
  will-change: width;
  transition: all 0.9 ease-out;
  margin-left: 50vw;
  transform: translateX(50vw);
  color: black;
  padding: 1em;
  display: grid;
  justify-content: center;
  align-content: center;
}
form h2 {
  color: var(--rare);
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1em;
  margin-bottom: 0;
}
.x {
  position: absolute;
  right: 2em;
  top: 2em;
  width: 2em;
  cursor: pointer;
}
</style>
