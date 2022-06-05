<template>
  <section>
    <router-link :to="{ name: 'Chat', params: { contact: contact.username } }">
      <div class="title">
        <DP addClass="scale">{{ contact.name[0] }}</DP>
        <span class="user">{{ contact.name }}</span>
      </div>
      <div class="content">{{ contact.messages[0].content }}</div>
    </router-link>
  </section>
</template>

<script>
import DP from "../DP.vue";
export default {
  props: ["contact"],
  components: { DP },
};
</script>

<style scoped>
section {
  background: var(--primaryO);
  margin: 2% auto;
  margin-bottom: 2%;
  border-radius: 5px;
  padding: 2%;
  font-size: 13px;
  width: 95%;
  cursor: pointer;
}
.title {
  position: relative;
  display: flex;
  justify-content: space-between;
  color: var(--primary);
}
.user {
  margin-left: 13%;
  margin-top: 1%;
  font-size: 16px;
  font-weight: 600;
}
section:hover {
  border-bottom: 1px solid var(--primary);
  transform: scale(1.05);
}

.content {
  padding: 3% 0 2% 3%;
  text-align: left;
  font-size: 0.8em;
}
/* tablet */
@media (max-width: 900px) {
  section {
    max-width: 400px;
  }
}
</style>
