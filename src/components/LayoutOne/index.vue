<template>
  <div class="layout">
    <Tab class="howdy"
      ><img src="../../assets/Howdy.svg" width="150" height="30"
    /></Tab>
    <Body
      ><div>
        <Post
          v-for="post in posts"
          :key="post.id"
          :liked="false"
          :post="post"
        /></div
    ></Body>
    <CreatePost v-if="create"><Fab @click="handleCreate" /></CreatePost>
    <Fab @click="handleCreate" class="hideOnMobile" />
  </div>
</template>

<script>
import Body from "../Body.vue";
import Tab from "../Tab.vue";

import posts from "../../data/posts";
import Post from "./Post.vue";
import Fab from "./Fab.vue";
import CreatePost from "./CreatePost.vue";

export default {
  components: { Tab, Body, Post, Fab, CreatePost },
  data() {
    return {
      posts,
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
p {
  font-size: 0.7em;
}
/* Mobile Devices*/
@media (max-width: 576px) {
  .howdy {
    position: sticky;
    top: 5px;
  }
}
</style>
