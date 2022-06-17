<template>
  <div class="signUp">
    <input
      :class="signin"
      spellcheck="false"
      @focus="handleFocus"
      @blur="handleBlur"
      :type="phone ? 'tel' : 'email'"
      :required="required"
    />
    <p
      :data-placeholder="phone ? 'Phone Number' : 'Email Address'"
      :class="signin"
    >
      {{ phone ? "Phone Number" : "Email Address" }}
    </p>
    <input
      spellcheck="false"
      @focus="handleFocus"
      @blur="handleBlur"
      required
    />
    <p data-placeholder="Username">Username</p>
    <input
      spellcheck="false"
      @focus="handleFocus"
      @blur="handleBlur"
      :type="showPassword ? 'text' : 'password'"
      required
    />
    <p data-placeholder="Password">Password</p>
    <h6 @click="toggleShowPassword">{{ showPassword ? "🔓" : "🔐" }}</h6>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SingUp",
  props: ["hasAccount", "phone"],
  components: {},
  setup() {
    const handleBlur = (e) => {
      if (e.target.value && e.target.type !== "password")
        e.target.nextSibling.innerText = e.target.value;
      else
        e.target.nextSibling.innerText =
          e.target.nextSibling.dataset.placeholder;
    };
    const handleFocus = (e) => {
      e.target.nextSibling.innerText = e.target.nextSibling.dataset.placeholder;
    };

    const showPassword = ref(false);
    const toggleShowPassword = (e) => {
      showPassword.value = !showPassword.value;
      e.target.previousSibling.previousSibling.focus();
    };
    return { handleBlur, handleFocus, showPassword, toggleShowPassword };
  },
  computed: {
    signin() {
      if (!this.hasAccount) return "signin";
    },
    required() {
      if (!this.hasAccount) return false;
      else return true;
    },
  },
};
</script>

<style>
div.signUp {
  /* background: red; */
  padding: 1em;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 1.5em;
  /* justify-content: flex-start; */
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
  /* margin: auto; */
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
  transition: 0.2s, visibility 0s;
}
.signUp h6 {
  color: var(--rare);
  text-align: right;
  font-size: 1rem;
  cursor: pointer;
  /* line-height: 0.3em; */
  margin: -1em 0 -1em auto;
  position: relative;
  bottom: 4em;
  /* left: 3em; */
  transition: 0.2s, visibility 0s;
  float: right;
  width: 2em;
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

/* Mobile Devices*/
@media (max-width: 576px) {
  input {
    min-width: unset;
  }
}
</style>
