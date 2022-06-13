<template>
  <form class="login">
    <h2>Create An Account</h2>
    <SignUp :hasAccount="!hasAccount" />
  </form>
</template>

<script>
import SignUp from "./SignUp.vue";
export default {
  components: { SignUp },
  name: "Login",
  props: ["hasAccount"],
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
</style>
