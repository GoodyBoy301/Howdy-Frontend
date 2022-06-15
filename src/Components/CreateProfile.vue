<template>
  <form class="login proceed">
    <!-- <img src="/assets/icons/back.svg" alt="" class="x" @click="toggleForm" /> -->
    <section>
      <h3>Complete Your Profile</h3>
      <img
        :src="`/assets/DPs/${pic}.png`"
        alt=""
        class="previewDP"
        :style="`background: ${color}`"
      />
      <div class="colors">
        <span
          v-for="i in [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet',
          ]"
          :key="i"
          :style="`--rare: ${i}`"
          @click="handleColor(i)"
        />
      </div>
      <div class="images">
        <img
          v-for="i in [
            'male01',
            'male02',
            'male03',
            'male04',
            'male05',
            'female01',
            'female02',
          ]"
          :key="i"
          :src="`/assets/DPs/${i}.png`"
          alt=""
          class="previewDP"
          style="--rare: transparent"
          @click="handlePic(i)"
        />
      </div>
    </section>
    <!-- <div class="proceed">
      <h3>{{ hasAccount ? "Sign In" : "Sign Up" }}</h3>
      <button type="submit" class="submit">
        <img src="/assets/icons/back.svg" alt="" />
      </button>
    </div>
    <h4 @click="toggleHasAccount">
      {{ hasAccount ? "Sign Up instead" : "Sign In instead" }}
    </h4>
    <h4 class="forgot" @click="togglePhone(hasAccount)">
      {{
        hasAccount ? "Forgot Password" : "Create an Account with Email Address"
      }}
    </h4> -->
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CreateProfile",
  props: [],
  components: {},
  setup() {
    const color = ref("black");
    const handleColor = (i) => {
      color.value = i;
    };

    const pic = ref("male01");
    const handlePic = (i) => {
      pic.value = i;
    };

    return { color, handleColor, pic, handlePic };
  },
};
</script>

<style>
form.proceed {
  z-index: 3;
  width: 50vw;
  max-width: unset;
  justify-content: center;
  text-align: center;
}

img.previewDP {
  width: 5em;
  height: 5em;
  padding: 1em;
  background: var(--rare);
  margin: 1em auto;
  pointer-events: none;
  object-fit: contain;
  border-radius: 50%;
  transition: 1;
}
div.colors {
  display: flex;
  margin: 0 auto;
}
div.colors span {
  padding: 2em;
  margin: 0.1em;
  background: var(--rare);
  cursor: pointer;
}
div.images {
  font-size: 0.6rem;
  margin: 0 auto;
  display: flex;
}
.proceed .images img {
  pointer-events: all;
  /* display: none; */
}
</style>
