<template>
  <div class="layout">
    <Tab><img src="../../assets/Howdy.svg" width="150" height="30" /></Tab>
    <Body
      ><div class="articles">
        <Post
          v-for="post in posts"
          :key="post.id"
          :liked="false"
          :post="post"
        /></div
    ></Body>
    <Footer>hdjbj</Footer>
  </div>
</template>

<script>
import Body from "../Body.vue";
import Footer from "../Footer.vue";
import Tab from "../Tab.vue";

import posts from "../../data/posts";
import Post from "./Post.vue";

export default {
  components: { Tab, Body, Footer, Post },
  data() {
    return {
      posts,
    };
  },
};
</script>

<style scoped></style>
