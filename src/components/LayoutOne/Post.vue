<template>
  <article>
    <div class="title">
      <DP addClass="scale">{{ post.author[0] }}</DP>
      <span class="user"
        ><router-link :to="{ name: 'Chat', params: { contact: post.author } }"
          >@{{ post.author }}</router-link
        ></span
      >
      <span class="like" :class="DoesLike" @click="handleClick"
        >{{ _likes.length }}❤
      </span>
    </div>
    <div class="content">{{ post.content }}</div>
  </article>
</template>

<script>
import DP from "../DP.vue";
export default {
  props: ["post", "liked"],
  components: { DP },
  data() {
    return {
      _liked: this.liked,
      _likes: this.post.likes,
    };
  },
  computed: {
    DoesLike() {
      if (!this._liked) return "";
      else return "liked";
    },
  },
  methods: {
    handleClick() {
      this._liked = !this._liked;
      if (this._liked) this._likes.push("me");
      else this._likes.pop();
      //todo
    },
  },
};
</script>

<style scoped>
article {
  background: var(--primaryO);
  margin: 2% auto;
  margin-bottom: 2%;
  border-radius: 5%;
  padding: 2%;
  font-size: 13px;
  width: 95%;
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
  cursor: pointer;
  margin-top: 2%;
}
.user:hover {
  color: var(--red);
  border-bottom: 1px solid var(--red);
}
.like {
  margin-right: 5%;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 2%;
}
.liked {
  color: var(--red);
}
.content {
  padding: 5% 0 2% 3%;
  text-align: left;
}
@media (max-width: 900px) {
  article {
    border-radius: 15px;
    max-width: 400px;
  }
  .user {
    margin-left: 50px;
    margin-top: 1%;
  }
  .like {
    margin-top: 1%;
  }
  .content {
    padding: 3.5% 0 1% 3%;
  }
}
</style>
