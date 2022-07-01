<template>
  <div class="landing" :class="formClass">
    <nav>
      <img src="/assets/brand/LogowText.svg" alt="" class="logo" /><span
        @click="toggleForm"
        class="toggle-form"
        data-form-type="in"
        >Start Messaging →</span
      >
    </nav>
    <div>
      <h1 class="landing_text">
        <span>Stay connected</span>
        <span class="wF">with your family and friends</span
        ><span class="wH">with Howdy</span>
      </h1>
      <p class="landing_text landing_p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iste
        perferendis. Dolorum archit
      </p>
      <button
        class="landing_text"
        @click="formEvent"
        data-form-type="up"
        :class="formClass"
      >
        👦🏽 Create a Profile
      </button>
    </div>
  </div>
  <CreateProfile
    v-if="proceed"
    :setLoggedIn="setLoggedIn"
    :Body="Body"
    :Error="Error"
  />
  <Login
    v-else
    :hasAccount="hasAccount"
    :toggleForm="toggleForm"
    :toggleHasAccount="toggleHasAccount"
    :toggleProceed="toggleProceed"
    :setLoggedIn="setLoggedIn"
    :Body="Body"
    :Error="Error"
  />
</template>

<script>
import { ref } from "vue";
import { toggleFormIn, toggleFormOut } from "../Animations/toggleForm.js";

import Login from "./LogIn.vue";
import CreateProfile from "./CreateProfile.vue";

export default {
  name: "Landing",
  props: ["loggedIn", "setLoggedIn"],
  components: { Login, CreateProfile },
  setup() {
    const form = ref(false);
    const toggleForm = (e) => {
      form.value = !form.value;
      if (form.value) {
        toggleFormIn();
        document.querySelector(".toggle-form").innerText = "";
      } else {
        toggleFormOut();
        document.querySelector(".toggle-form").innerText = "Start Messaging →";
      }
      if (e.target.dataset.formType === "in") hasAccount.value = true;
      if (e.target.dataset.formType === "up") hasAccount.value = false;
    };

    const hasAccount = ref(false);
    const toggleHasAccount = () => {
      hasAccount.value = !hasAccount.value;
    };

    const proceed = ref(false);
    const toggleProceed = () => {
      proceed.value = !proceed.value;
    };

    const Body = ref({});
    const Error = ref({
      state: false,
      message: "something went wrong",
      setMessage: () => {},
      toggle: () => {},
      cancel: () => {},
      call: () => {},
    });

    Error.value.toggle = () => {
      Error.value.state = false;
      const timeout = setTimeout(() => {
        Error.value.state = true;
        clearTimeout(timeout);
      }, 300);
    };
    Error.value.cancel = () => (Error.value.state = false);
    Error.value.call = () => (Error.value.state = true);
    Error.value.setMessage = (msg) => (Error.value.message = msg);

    return {
      form,
      toggleForm,
      hasAccount,
      toggleHasAccount,
      proceed,
      toggleProceed,
      Body,
      Error,
    };
  },
  computed: {
    formClass() {
      if (this.form) return "form";
    },
    formEvent() {
      if (!this.form) return this.toggleForm;
    },
  },
};
</script>

<style>
div.landing {
  margin: 0;
  height: 100vh;
  width: 100vw;
  /* background: #342324ee; */
  background: #000000e0;
  backdrop-filter: blur(13px);
  position: absolute;
  top: 0;
  left: 0;
  will-change: width;
  transition: all 0.9 ease-out;
  z-index: 2;
}
.landing > div {
  display: grid;
  height: 70vh;
  place-items: center;
  place-content: center;
  bottom: 0;
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
span.wH {
  display: none;
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
  min-height: 4em;
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
  cursor: pointer;
  transition: 0.2s;
  padding: 0 0.3em;
}
nav span:hover {
  transform: translateX(-10px);
}
.landing img {
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
  border: 0;
  cursor: pointer;
  transition: 0.7s, transform 0s;
}
button.form {
  cursor: not-allowed;
  filter: brightness(0.3);
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

/* tablet */
@media (max-width: 1024px) {
  h1 {
    width: unset;
  }
  .landing > div > p {
    width: 80%;
  }
}
</style>
