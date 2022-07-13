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
      <img src="/assets/icons/plus.svg" v-if="Add" />
      <img
        :src="`/assets/icons/${Add ? 'x' : 'plus'}.svg`"
        alt=""
        @click="handleAdd"
      />
      <Search v-if="Add" :searchTerm="addTerm">
        <input
          type="text"
          placeholder="Search user..."
          maxlength="15"
          spellcheck="false"
          v-model="addTerm"
          id="inputAdd"
          autofocus
        />
      </Search>
      <img
        :src="`/assets/icons/${Search ? 'x' : 'search'}.svg`"
        alt=""
        @click="handleSearch"
        v-if="!Add"
      />
      <Search v-if="Search" :searchTerm="searchTerm">
        <input
          type="text"
          placeholder="Search your Contacts..."
          maxlength="15"
          spellcheck="false"
          v-model="searchTerm"
          id="inputSearch"
          autofocus
        />
      </Search>
    </div>
    <ul v-if="Contacts || filterContacts || Search">
      <router-link
        v-for="user in Search || Add ? filterContacts : Contacts"
        :key="user.username"
        :to="getRoute(user)"
      >
        <!-- <router-link :to="user.username"> -->
        <img
          :src="`/assets/DPs/${user.pic}.png`"
          alt=""
          class="dp"
          :style="`--dp:${user.color}`"
        />
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
import { clear, get } from "idb-keyval";
import axios from "axios";
import Search from "./Search.vue";
export default {
  components: { Search },
  props: ["setLoggedIn"],
  setup({ setLoggedIn }) {
    const Logout = () => {
      clear().then(() => setLoggedIn());
    };

    const Contacts = ref([]);
    const Users = ref([]);

    let User;
    get("user").then((data) => {
      User = data;
      setInterval(() => {
        axios
          .get(`${process.env.VUE_APP_API}/contacts?username=${data.username}`)
          .then(({ data }) => {
            Contacts.value = data;
            //filterContacts.value = data;
          });
      }, 2000);
      setInterval(() => {
        axios.get(`${process.env.VUE_APP_API}/users`).then(({ data }) => {
          Users.value = data;
        });
      }, 4000);
    });

    const filterContacts = ref([]);

    const Search = ref(false);
    const searchTerm = ref("");
    const handleSearch = (e) => {
      const anime = e.target.animate([{ transform: "rotate(0.25turn)" }], {
        duration: 200,
        easing: "ease-in-out",
      });
      anime.pause();
      if (!Search.value) {
        anime.currentTime = 0;
        anime.play();
      } else {
        anime.currentTime = 200;
        anime.reverse();
        filterContacts.value = Contacts.value;
      }
      Search.value = !Search.value;
    };

    const Add = ref(false);
    const addTerm = ref("");
    const handleAdd = (e) => {
      const anime = e.target.animate([{ transform: "rotate(0.25turn)" }], {
        duration: 200,
        easing: "ease-in-out",
      });
      anime.pause();
      if (!Add.value) {
        anime.currentTime = 0;
        anime.play();
      } else {
        anime.currentTime = 200;
        anime.reverse();
        filterContacts.value = Contacts.value;
      }
      Add.value = !Add.value;
    };

    const getRoute = (user) => {
      if (user.username) return user.username;
      //sent by me
      if (User.username === user.from) return user.to;
      return user.from;
    };
    return {
      User,
      Logout,
      Contacts,
      Users,
      filterContacts,
      Search,
      handleSearch,
      searchTerm,
      Add,
      handleAdd,
      addTerm,
      getRoute,
    };
  },
  watch: {
    searchTerm(x) {
      this.filterContacts = this.Contacts?.filter(
        (contact) => contact.name?.includes(x) || contact.username?.includes(x)
      );
    },
    addTerm(x) {
      this.filterContacts = this.Users?.filter(
        (contact) => contact.name?.includes(x) || contact.username?.includes(x)
      );
    },
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
  width: 2.3em;
  height: 2.3em;
  padding: 0.28em;
  box-sizing: border-box;
  object-fit: contain;
  cursor: pointer;
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
