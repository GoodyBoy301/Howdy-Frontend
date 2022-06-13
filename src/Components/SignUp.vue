<template>
  <div class="signUp">
    <input :class="signin" placeholder="Phone Number" />
    <input placeholder="Username" />
    <input placeholder="Password" />
  </div>
</template>

<script>
export default {
  name: "SingUp",
  props: ["hasAccount"],
  components: {},
  setup() {},
  computed: {
    signin() {
      if (!this.hasAccount) return "signin";
    },
  },
};
</script>

<style>
div.signUp {
  /* background: red; */
  padding: 1em;
  display: grid;
  margin: 0;
  gap: 1.5em;
  justify-content: flex-start;
}
input {
  display: block;
  padding: 1em;
  color: var(--rare);
  background: transparent;
  border: 0;
  border-bottom: 2px solid black;
  outline: none;
  max-width: 30em;
  min-width: 400px;
  margin: auto;
  pointer-events: visible;
}
.signin {
  visibility: hidden;
}
</style>
