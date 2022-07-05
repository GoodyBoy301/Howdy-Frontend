<template>
  <section class="chat home">
    <Profile :User="User" :setLoggedIn="setLoggedIn" :logout="true" />
  </section>
</template>

<script>
import { ref } from "vue";
import { get } from "idb-keyval";
import Profile from "../Components/Profile.vue";
export default {
  components: { Profile },
  props: ["setLoggedIn"],
  setup({ setLoggedIn }) {
    const User = ref({});
    get("user").then((user) => (User.value = user));

    return { User };
  },
};
</script>

<style>
.home {
  position: relative;
}

/* Mobile Devices*/
@media (max-width: 576px) {
  .chat.home {
    grid-area: 1;
    width: 0;
  }
}
</style>
