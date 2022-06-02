<template>
  <article>
    <div class="title">
      <DP addClass="scale">{{ post.author[0] }}</DP>
      <span class="user">{{ post.author }}</span>
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
  background: var(--primary);
  margin-bottom: 2%;
  border-radius: 2%;
  padding: 2%;
}
.title {
  position: relative;
  background: green;
  display: flex;
}
.user {
  margin-left: 15%;
  font-size: 14px;
}
.user::before {
  content: "@";
}
</style>
