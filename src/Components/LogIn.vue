<template>
  <form class="login" @submit="handleSubmit($event, hasAccount, Body, Error)">
    <img src="/assets/icons/x.svg" alt="" class="x" @click="toggleForm" />
    <section>
      <h2 v-show="Error.state" class="authToast">{{ Error.message }}</h2>
      <h2>{{ hasAccount ? "Welcome Back🎉" : "Create An Account" }}</h2>
      <SignUp :hasAccount="!hasAccount" :phone="phone" :Body="Body" />
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
        hasAccount
          ? "Forgot Password"
          : `Create an Account with ${phone ? "Email Address" : "Phone Number"}`
      }}
    </h4>
  </form>
</template>

<script>
import { ref } from "vue";
import { set } from "idb-keyval";
import axios from "axios";
import SignUp from "./SignUp.vue";
export default {
  name: "Login",
  props: [
    "hasAccount",
    "toggleForm",
    "toggleHasAccount",
    "toggleProceed",
    "setLoggedIn",
    "Body",
    "Error",
  ],
  components: { SignUp },
  setup({ toggleProceed, setLoggedIn }) {
    const phone = ref(true);
    const togglePhone = (hasAccount) => {
      console.log();
      if (!hasAccount) {
        phone.value = !phone.value;
      }
    };

    const handleSubmit = (e, hasAccount, Body, Error) => {
      e.preventDefault();
      if (!hasAccount) toggleProceed();
      else {
        console.log(e, Body);
        axios.get("http://localhost:3000/users").then(({ data }) => {
          const [found] = data.filter(
            (datum) => datum.username === Body.username
          );
          if (found && found.password === Body.password) {
            setLoggedIn();
          } else if (found && found.password !== Body.password) {
            Error.setMessage("Incorrect password");
            Error.setMisc("Incorrect password");
            Error.toggle();
            console.log(Error);
          } else if (!found) {
            Error.setMessage("Account Doesn't Exist");
            Error.setMisc("Account Doesn't Exist");
            Error.toggle();
            console.log(Error);
          } else {
            Error.setMisc = "unknown";
            Error.toggle();
            console.log(Error);
          }
          console.log(found);
        });
      }
    };
    //const handleSubmit = (e, hasAccount) => {
    //e.preventDefault();
    //if (!hasAccount) toggleProceed();
    //else {
    //set("user", "Kush Gibson").then(() => setLoggedIn());
    //}
    //}

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
  display: none;
  /* justify-content: center; */
  align-content: center;
}
form h2 {
  color: var(--rare);
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1rem;
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
.authToast {
  font-size: 1.6rem;
  background: var(--error);
  color: white;
  text-align: center;
  padding: 1.5em;
  position: absolute;
  top: 10%;
  width: 92%;
}
/* tablet */
@media (max-width: 768px) {
  form {
    width: 100vw;
    margin-left: 0;
    transform: translateX(100vw);
  }
}
/* Mobile Devices*/
@media (max-width: 576px) {
  form {
    position: unset;
  }
  .login section {
    max-width: 90vw;
    min-width: unset;
  }
  form h2 {
    font-size: 2rem;
  }
  .proceed {
    min-width: unset;
    max-width: 80vw;
  }
  h4.forgot {
    top: 7vh;
    height: 2em;
  }
  .authToast {
    padding: 0.25em;
    font-size: 1.35em;
  }
}
</style>
