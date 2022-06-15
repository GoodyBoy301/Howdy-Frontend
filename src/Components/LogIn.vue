<template>
  <form class="login" @submit="handleSubmit">
    <img src="/assets/icons/x.svg" alt="" class="x" @click="toggleForm" />
    <section>
      <h2>{{ hasAccount ? "Welcome Back🎉" : "Create An Account" }}</h2>
      <SignUp :hasAccount="!hasAccount" :phone="phone" />
    </section>
    <div class="proceed">
      <h3>{{ hasAccount ? "Sign In" : "Sign Up" }}</h3>
      <button type="submit" class="submit">
        <img src="/assets/icons/back.svg" alt="" />
      </button>
    </div>
    <h4 @click="toggleHasAccount">
      {{ hasAccount ? "Sign Up instead" : "Sign In instead" }}
    </h4>
    <h4 class="forgot" @click="togglePhone(hasAccount)">
      {{
        hasAccount ? "Forgot Password" : "Create an Account with Email Address"
      }}
    </h4>
  </form>
</template>

<script>
import { ref } from "vue";
import SignUp from "./SignUp.vue";
export default {
  name: "Login",
  props: ["hasAccount", "toggleForm", "toggleHasAccount", "toggleProceed"],
  components: { SignUp },
  setup({ toggleProceed }) {
    const phone = ref(true);
    const togglePhone = (hasAccount) => {
      console.log();
      if (!hasAccount) {
        phone.value = !phone.value;
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      toggleProceed();
    };

    return { phone, togglePhone, handleSubmit };
  },
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
  /* justify-content: center; */
  align-content: center;
}
form h2 {
  color: var(--rare);
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1em;
  margin-bottom: 0;
  pointer-events: none;
}
.x {
  position: absolute;
  right: 2em;
  top: 2em;
  width: 2em;
  cursor: pointer;
  box-sizing: content-box;
  border-radius: 50%;
}
.x:hover {
  border: 2px solid var(--rare);
  padding: 4px;
  right: calc(2em - 6px);
  top: calc(2em - 6px);
}
.login section {
  display: grid;
  justify-content: center;
  min-width: 500px;
}
.proceed {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  width: 35rem;
  max-width: 425px;
  margin: auto;
}
.proceed h3 {
  color: var(--rare);
  font-size: 1.75rem;
  pointer-events: none;
}
button.submit {
  all: initial;
}
.proceed img {
  width: 2em;
  cursor: pointer;
  transform: rotateY(180deg);
  /* padding: 10em; */
  /* background: var(--rare); */
}
h4 {
  position: absolute;
  left: 1em;
  bottom: 1em;
  cursor: pointer;
  color: black;
  font-size: 1rem;
  font-weight: 300;
  user-select: none;
  padding: 0 0.3em;
}
h4:hover {
  border-bottom: 1px solid black;
  padding-bottom: 0.3em;
  /* box-shadow: 0px 1px 1px 5px black; */
}
h4.forgot {
  left: unset;
  right: 1em;
}
</style>
