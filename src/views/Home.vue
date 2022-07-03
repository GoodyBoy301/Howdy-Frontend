<template>
  <section class="chat home">
    <!-- <div class="heading bar">
      <li class="topbar">
        <img src="/assets/icons/back.svg" alt="" class="mobile back" />
        <img src="/assets/DPs/male02.png" alt="" class="dp" />
        <div>
          <h3>Kush Gibson</h3>
          <p>Online 8 mins ago</p>
        </div>
        <div><img src="/assets/icons/dots.svg" alt="" /></div>
      </li>
    </div> -->

    <section class="profile">
      <div class="banner">
        <img
          :src="`/assets/DPs/${pic || 'male04'}.png`"
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
    <h3 class="logout__desktop" @click="Logout">Logout</h3>
  </section>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { clear, get } from "idb-keyval";
export default {
  props: ["setLoggedIn"],
  setup({ setLoggedIn }) {
    const User = ref({});
    get("user").then((user) => (User.value = user));
    const Logout = () => {
      clear().then(() => setLoggedIn());
    };
    axios
      .get("http://localhost:3000/users")
      .then(({ data }) => console.log({ data, User }));
    return { Logout, User };
  },
};
</script>

<style>
.home {
  position: relative;
}
.profile {
  display: grid;
  background: white;
  height: 100%;
  justify-content: flex-start;
  grid-template-rows: 5fr 1fr 4fr;
  grid-template-columns: 1fr;
}
.banner {
  background: yellow;
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
  border: 3px solid white;
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
  color: var(--darkPrimary);
  text-align: center;
  font-size: 1.5rem;
  width: 75%;
  margin: auto;
  font-weight: 600;
}
.bio {
  color: var(--darkPrimary);
  text-align: center;
  font-size: 1rem;
  width: 75%;
  margin: 3% auto;
  font-weight: 500;
}
/* Mobile Devices*/
@media (max-width: 576px) {
  .chat.home {
    grid-area: 1;
    width: 0;
  }
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
