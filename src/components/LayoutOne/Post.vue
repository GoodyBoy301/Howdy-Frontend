<template>
  <article>
    <div class="title">
      <DP addClass="scale">{{ post.author[0] }}</DP>
      <span class="user">{{ post.author }}</span>
      <span class="like">32❤ </span>
    </div>
    <div>{{ post.content }}</div>
  </article>
</template>

<script>
import DP from "../DP.vue";
export default {
  props: ["post"],
  components: { DP },
};
</script>

<style scoped>
article {
  background: var(--primaryO);

  margin-bottom: 2%;
  border-radius: 2%;
  padding: 2%;
}
.title {
  position: relative;
  display: flex;
  justify-content: space-between;
  color: var(--primary);
}
.user {
  margin-left: 13%;
  font-size: 14px;
}
.user::before {
  content: "@";
}
.like {
  margin-right: 5%;
}
.liked {
  color: red;
}
</style>
