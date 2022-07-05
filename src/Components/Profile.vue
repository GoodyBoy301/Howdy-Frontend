<template>
  <section class="profile" :style="`--dp:${User.color}`">
    <div class="banner">
      <img
        :src="`/assets/DPs/${User.pic}.png`"
        alt=""
        class="previewDP profileDP"
      />
    </div>
    <div>
      <h5 class="myName">{{ User?.name }}</h5>
      <h6 class="bio">
        {{ User?.bio }}
      </h6>
    </div>
  </section>
  <h3 class="logout__desktop" @click="Logout" v-if="logout">Logout</h3>
</template>

<script>
import { clear } from "idb-keyval";
export default {
  props: ["User", "setLoggedIn", "logout"],
  setup({ setLoggedIn }) {
    const Logout = () => {
      clear().then(() => setLoggedIn());
    };
    return { Logout };
  },
};
</script>

<style>
.profile {
  display: grid;
  background: var(--lightPrimary);
  height: 100%;
  justify-content: flex-start;
  grid-template-rows: 5fr 1fr 4fr;
  grid-template-columns: 1fr;
}

.banner {
  background: var(--dp);
  height: 150px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.previewDP.profileDP {
  position: relative;
  top: 60%;
  background: inherit;
  border: 3px solid var(--lightPrimary);
  box-sizing: content-box;
}
.logout__desktop {
  position: absolute;
  bottom: 1em;
  left: 0;
  right: 0;
  text-align: center;
  color: #fe5f58;
  cursor: pointer;
}
.myName {
  color: white;
  text-align: center;
  font-size: 1.5rem;
  width: 75%;
  margin: auto;
  font-weight: 600;
}
.bio {
  color: white;
  text-align: center;
  font-size: 1rem;
  width: 75%;
  margin: 3% auto;
  font-weight: 500;
}
/* Mobile Devices*/
@media (max-width: 576px) {
  .logout__desktop {
    display: none;
  }
  .banner,
  .bio,
  .myName {
    display: none;
  }
}
</style>
