<template>
  <div class="layout">
    <Tab
      ><img src="../../assets/Howdy.svg" width="150" height="30" /><em
        >+</em
      ></Tab
    >
    <Body
      ><div class="articles">
        <article v-for="post in posts" :key="post.id">
          <div class="post">
            {{ post.author }}
          </div>
          <div>{{ post.content }}</div>
        </article>
      </div></Body
    >
    <Footer>hdjbj</Footer>
  </div>
</template>

<script>
import Body from "../Body.vue";
import Footer from "../Footer.vue";
import Tab from "../Tab.vue";

import posts from "../../data/posts";

export default {
  components: { Tab, Body, Footer },
  data() {
    return {
      posts,
    };
  },
};
</script>

<style scoped>
.articles {
}
article {
  background: var(--primary);
  margin-bottom: 2%;
  border-radius: 2%;
}
</style>
