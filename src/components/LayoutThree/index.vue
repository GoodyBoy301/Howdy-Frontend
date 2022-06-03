<template>
  <div class="layout">
    <Tab><h5>Logout</h5></Tab>
    <Body
      ><div>
        <h1>Contacts</h1>
        <Person
          v-for="contact in contacts"
          :key="contact.username"
          :contact="contact"
        /></div
    ></Body>
  </div>
</template>

<script>
import Body from "../Body.vue";
import Post from "../LayoutOne/Post.vue";
import Tab from "../Tab.vue";

import contacts from "../../data/contacts";
import Person from "./Person.vue";
import messages from "../../data/messages";

contacts.forEach((contact) => (contact.messages = messages));

export default {
  name: "LayoutOne",
  components: { Tab, Body, Post, Person },
  data() {
    return {
      contacts,
      messages,
      create: false,
    };
  },
  methods: {
    handleCreate() {
      this.create = !this.create;
    },
  },
};
</script>

<style scoped>
h5 {
  margin-left: auto;
  cursor: pointer;
}
h1 {
  pointer-events: none;
}
</style>
