<template>
  <aside>
    <div class="mac">
      <span style="--color: #fe5f58" /><span style="--color: #ffbc2e" /><span
        style="--color: #24c840"
      />
      <h3 class="logout__mobile" @click="Logout">Logout</h3>
    </div>
    <div class="heading">
      <h2>Contacts</h2>
      <img src="/assets/icons/search.svg" alt="" />
      <img src="/assets/icons/plus.svg" alt="" />
    </div>
    <ul>
      <router-link
        v-for="user in Contacts"
        :key="user.username"
        :to="user.username"
      >
        <!-- <router-link :to="user.username"> -->
        <img :src="`/assets/DPs/${user.pic}.png`" alt="" class="dp" />
        <div>
          <h3>{{ user.name }}</h3>
          <p>Lorem ipsum dol...</p>
        </div>
        <div><p>Yesterday</p></div>
      </router-link>
      <!-- </li> -->
    </ul>
  </aside>
</template>

<script>
import { ref } from "vue";
import { clear } from "idb-keyval";
import axios from "axios";
export default {
  props: ["setLoggedIn"],
  setup({ setLoggedIn }) {
    const Logout = () => {
      clear().then(() => setLoggedIn());
    };

    const Contacts = ref([]);
    axios
      .get("http://localhost:3000/users")
      .then(({ data }) => (Contacts.value = data));
    return { Logout, Contacts };
  },
};
</script>

<style>
aside {
  background: #342324ee;
  border-radius: 15px 0 0 15px;
  width: 100%;
  height: inherit;
  backdrop-filter: blur(13px);
  overflow: hidden;
  /* cursor: url("/cursor.png"), auto; */
}
div {
  margin: 5%;
}
.mac {
  display: flex;
  align-items: flex-end;
  height: 4%;
}
.mac span {
  width: 12px;
  height: 12px;
  margin: 1%;
  border-radius: 50%;
  display: block;
  background: var(--color);
}
.heading {
  display: flex;
  margin-bottom: 0;
}
h2 {
  font-weight: 500;
}
img {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  object-fit: cover;
}
.heading img {
  padding: 0.6em;
  background: var(--lightPrimary);
}
.heading img:first-of-type {
  margin: 0 0.55em 0 auto;
}
ul {
  overflow-y: scroll;
  max-height: calc(95%);
  list-style: none;
  margin-top: 0;
}
li,
a {
  /* height: 4em; */
  margin: 1.5%;
  padding: 1.5% 3.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
  cursor: pointer;
}
li:hover {
  background: var(--darkPrimary);
  border-radius: 0.5em;
}
li img,
a img {
  width: 3em;
  height: 3em;
  padding: 0.25em;
  box-sizing: border-box;
  object-fit: contain;
}
img.dp {
  background: var(--dp) !important;
}
li > div,
a > div {
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 60%;
}
li h3,
a h3 {
  font-weight: 500;
}
li p,
a p {
  font-weight: 200;
  justify-self: flex-end;
}
.logout__mobile {
  display: none;
}

/* tablet */
@media (max-width: 1024px) {
  aside {
    border-radius: 0;
  }
  ul {
    padding-bottom: 30%;
  }
  li,
  a {
    height: 3.5em;
  }
  li > div,
  a > div {
    font-size: 0.7rem;
  }
  li h3,
  a h3 {
    font-weight: 300;
  }
  li p,
  a p {
    display: none;
  }
}

/* Mobile Devices*/
@media (max-width: 576px) {
  aside {
    font-size: 25px;
  }
  li p,
  a p {
    display: unset;
  }
  li,
  a {
    margin: auto;
  }
  li > div,
  a > div {
    font-size: 0.9rem;
    margin-right: 1em;
  }
  .logout__mobile {
    margin-left: auto;
    font-size: 0.8em;
    font-weight: 400;
    color: #fe5f58;
    display: block;
  }
}
</style>
