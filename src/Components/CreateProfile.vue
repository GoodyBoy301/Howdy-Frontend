<template>
  <form class="login proceed" @submit="handleSubmit($event, Body, Error)">
    <section>
      <img
        :src="`/assets/DPs/${pic}.png`"
        alt=""
        class="previewDP"
        :style="`background: ${color}`"
      />
      <input
        spellcheck="false"
        required="required"
        placeholder="enter your name"
        class="enterName"
        maxlength="24"
        v-model="Body.name"
      />
      <textarea
        spellcheck="false"
        maxlength="100"
        placeholder="add a short bio..."
        v-model="Body.bio"
      />
      <span class="buttons"><button>Skip</button><button>Save</button></span>
      <div class="colors">
        <span
          v-for="i in [
            '#97260c',
            '#97690c',
            '#998b0c',
            '#5f960d',
            '#0d6496',
            '#660d96',
            '#960d62',
          ]"
          :key="i"
          :style="`--rare: ${i}`"
          @click="handleColor(i, Body)"
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
          @click="handlePic(i, Body)"
        />
      </div>
    </section>
  </form>
</template>

<script>
import { ref } from "vue";
import { set } from "idb-keyval";
import axios from "axios";

export default {
  name: "CreateProfile",
  props: ["setLoggedIn", "Body", "Error"],
  components: {},
  setup({ setLoggedIn }) {
    const color = ref("black");
    const handleColor = (i, Body) => {
      color.value = i;
      Body.color = i;
    };

    const pic = ref("male01");
    const handlePic = (i, Body) => {
      pic.value = i;
      Body.pic = i;
    };

    const handleSubmit = (e, Body, Error) => {
      e.preventDefault();

      console.log(e, Body);
      axios
        .post(`${process.env.VUE_APP_API}/users`, {
          ...Body,
          id: Math.random(),
        })
        .then(({ data }) => {
          set("user", data).then(() => setLoggedIn());
          console.log(data);
        });
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   set("user", "Kush Gibson").then(() => setLoggedIn());
    // };

    return { color, handleColor, pic, handlePic, handleSubmit };
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
  /* transition: 0.2s; */
}
textarea,
.enterName {
  border-radius: 0.5em;
  margin: 1em auto;
  height: 5em;
  width: 470px;
  resize: none;
  color: black;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: inherit;
  background: #fff3;
  padding: calc(0.1em + 2px) calc(0.5em + 2px);
  /* backdrop-filter: blur(1px); */
  border: 0;
  /* box-sizing: content-box; */
  /* transition: 0.2s; */
}
input.enterName {
  text-align: left;
  color: black;
  height: unset;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin: 0 auto;
  border-radius: 1em;
}
textarea:focus {
  border: 2px solid black;
  padding: 0.1em 0.5em;
  outline: none;
}
.buttons {
  margin-bottom: 1em;
  display: flex;
}
.buttons button {
  font-size: 1rem;
  padding: 0.7em 1em;
  font-weight: 600;
  font-family: inherit;
}
.buttons button:first-of-type {
  color: black;
  background: #fff3;
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
/* tablet */
@media (max-width: 1024px) {
  form.proceed {
    transform: unset;
    width: 100vw;
  }
}

/* Mobile Devices*/
@media (max-width: 576px) {
  textarea,
  input.enterName {
    width: 300px;
  }
  .buttons button {
    width: 8.5em;
  }
}
</style>
