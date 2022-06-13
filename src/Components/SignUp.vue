<template>
  <div class="signUp">
    <input
      :class="signin"
      spellcheck="false"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <p data-placeholder="Phone Number" :class="signin">Phone Number</p>
    <input spellcheck="false" @focus="handleFocus" @blur="handleBlur" />
    <p data-placeholder="Username">Username</p>
    <input
      spellcheck="false"
      @focus="handleFocus"
      @blur="handleBlur"
      type="password"
    />
    <p data-placeholder="Password">Password</p>
  </div>
</template>

<script>
export default {
  name: "SingUp",
  props: ["hasAccount"],
  components: {},
  setup() {
    const handleBlur = (e) => {
      console.log(e);
      if (e.target.value && e.target.type !== "password")
        e.target.nextSibling.innerText = e.target.value;
      else
        e.target.nextSibling.innerText =
          e.target.nextSibling.dataset.placeholder;
    };
    const handleFocus = (e) => {
      console.log(e);
      e.target.nextSibling.innerText = e.target.nextSibling.dataset.placeholder;
    };

    return { handleBlur, handleFocus };
  },
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
  background: transparent;
  border: 0;
  border-bottom: 2px solid black;
  outline: none;
  max-width: 30em;
  min-width: 400px;
  margin: auto;
  pointer-events: visible;
  font-size: 1rem;
  transform: 1s;
  text-align: right;
  color: transparent;
}
.signin {
  visibility: hidden;
}
.signUp p {
  color: var(--rare);
  font-size: 1rem;
  /* line-height: 0.3em; */
  margin: -1em 0;
  position: relative;
  bottom: 3em;
  left: 1em;
  pointer-events: none;
  transition: 0.2s;
}

input:focus {
  /* padding: 1em; */
  text-align: left;
  color: var(--rare);
}
input:focus + p {
  bottom: 5em;
  left: 0;
}
input:placeholder-shown + p {
  display: none;
}
</style>
