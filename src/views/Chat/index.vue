<template>
  <div v-if="person.username" class="chat">
    <Messages />
    <Message :setNewMessage="setNewMessage" />
    <Head :person="person" />
  </div>
  <div v-else class="home">
    <h2>Loading....</h2>
    <h4>usually takes 0.0638 ms</h4>
  </div>
</template>

<script>
import Head from "./Head.vue";
import Message from "./Message.vue";
import Messages from "./Messages.vue";
import contacts from "../../data/contacts";

export default {
  props: ["contact"],
  components: { Head, Message, Messages },
  data() {
    return { person: {}, newMessage: "" };
  },
  mounted() {
    this.person = this.search();
  },
  watch: {
    contact() {
      this.person = this.search();
    },
    newMessage() {
      if (this.newMessage) console.log("changed", this.newMessage);
    },
  },
  methods: {
    search() {
      return contacts.filter((contact) => contact.username === this.contact)[0];
    },
    setNewMessage(input) {
      this.newMessage = input;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

/* tablet */
@media (max-width: 900px) {
  .home {
    min-height: calc(100vh - 50px);
  }
}
</style>
