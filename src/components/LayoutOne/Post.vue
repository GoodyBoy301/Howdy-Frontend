<template>
  <article>
    <div class="title">
      <DP addClass="scale">{{ post.author[0] }}</DP>
      <span class="user">{{ post.author }}</span>
      <span class="like">{{ post.likes.length }}❤ </span>
    </div>
    <div class="content">{{ post.content }}</div>
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
  border-radius: 5%;
  padding: 2%;
  font-size: 13px;
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
.content {
  padding: 5% 0 2% 3%;
  text-align: left;
}
</style>
