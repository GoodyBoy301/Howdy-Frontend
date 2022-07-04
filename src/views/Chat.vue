<template>
  <section class="chat" :style="`--dp:${Contact.color}`">
    <div class="heading bar">
      <li class="topbar">
        <img
          src="/assets/icons/back.svg"
          alt=""
          class="mobile back"
          @click="$router.back()"
        />
        <img :src="`/assets/DPs/${Contact.pic}.png`" alt="" class="dp" style />
        <div>
          <h3>{{ Contact.name }}</h3>
          <p>Online 8 mins ago</p>
        </div>
        <Menu :Contact="Contact" />
      </li>
    </div>
    <div class="messages">
      <transition-group name="messages" tag="div" @enter="onEnter">
        <Message
          :Contact="Contact"
          v-for="(message, index) in Messages"
          :key="message.date"
          :data-index="10 - index"
          :message="message"
        />
      </transition-group>
    </div>
    <div class="input">
      <span
        class="textarea"
        contenteditable
        spellcheck="false"
        @keydown.enter.capture.prevent="handleSend"
      /><img src="/assets/icons/send.svg" alt="" @click="handleSendButton" />
    </div>
  </section>
</template>

<script>
import { get } from "idb-keyval";
import axios from "axios";
import { ref } from "vue";
import gsap from "gsap";
import Message from "../Components/Message.vue";
import Menu from "../Components/Menu.vue";
export default {
  name: "chat",
  props: [],
  components: { Message, Menu },
  setup() {
    const Contact = ref({});
    const Messages = ref([]);

    const handleSend = (e) => {
      e.preventDefault();
      const content = e.target.innerText;
      e.target.innerText = "";
      axios.post("http://localhost:3000/messages", {
        content,
        from: "me",
        to: Contact.value.username,
        date: new Date().toJSON(),
        id: Math.random(),
      });
    };
    const handleSendButton = (e) => {
      e.preventDefault();
      const content = e.target.previousSibling.innerText;
      e.target.previousSibling.innerText = "";
      axios.post("http://localhost:3000/messages", {
        content,
        from: "me",
        to: Contact.value.username,
        date: new Date().toJSON(),
        id: Math.random(),
      });
    };

    const onEnter = (el) => {
      gsap.from(el, {
        y: 10,
        opacity: 0,
        delay: el.dataset.index / 15,
        ease: "power3",
        duration: 0.2,
      });
    };

    return {
      Contact,
      Messages,
      handleSend,
      handleSendButton,
      onEnter,
    };
  },
  beforeMount() {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      this.Contact = data.filter(
        (datum) => datum.username === this.$route.params.contact
      )[0];

      // console.log(this.Contact);
    });

    setInterval(() => {
      axios.get("http://localhost:3000/messages").then(({ data }) => {
        const sortedData = data
          .filter(
            (datum) =>
              datum.to === this.Contact?.username ||
              datum.from === this.Contact?.username
          )
          .sort((x, y) => Number(new Date(y.date)) - Number(new Date(x.date)));
        this.Messages = sortedData;

        // console.log(this.Messages)x
      });
    }, 1000);
    this.Messages = [];
  },
  watch: {
    $route() {
      this.Messages = [];
      axios.get("http://localhost:3000/users").then(({ data }) => {
        this.Contact = data.filter(
          (datum) => datum.username === this.$route.params.contact
        )[0];

        // console.log(this.Contact);
      });
    },
  },
};
</script>

<style>
.chat {
  background: #51312eee;
  border-radius: 0 15px 15px 0;
  width: 100%;
  height: inherit;
  backdrop-filter: blur(13px);
  --dp: #804d0a;
  position: relative;
}
.heading .topbar {
  display: grid;
  width: 100%;
  align-items: center;
  padding: 0;
  height: 4em;
}
.heading .topbar:hover {
  background: unset;
  cursor: unset;
}
.heading .topbar img:hover {
  cursor: pointer;
  background: var(--darkPrimary);
}
.heading .topbar div {
  margin-left: 0.5em;
}

.messages {
  height: 50%;
  margin: 2.5% 0;
}
.messages > div {
  margin: 0 auto;
  width: 82.5%;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  align-content: flex-start;
  overflow-y: scroll;
  overflow-x: unset;
}

.input {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  height: 13.5%;
  align-items: flex-end;
  max-width: 35em;
  position: relative;
}
.textarea {
  width: 35em;
  background: #342324bb;
  min-height: 2rem;
  padding: 1em;
  max-height: 6em;
  font-size: 0.8em;
  overflow: auto;
  border-radius: 1em;
  padding-right: 4em;
  flex: 1;
  opacity: 0.8;
  transition: 3s;
}
.textarea:focus {
  outline: var(--darkPrimary) solid 1px;
  opacity: 1;
}
.textarea div {
  margin: 0;
  max-width: 100%;
}
.input img {
  position: absolute;
  right: 1em;
  float: right;
  --dp: transparent;
  object-fit: contain;
  color: var(--rare);
  align-self: center;
  bottom: 0.3em;
  width: 1.5em;
  cursor: pointer;
}
.userInfo {
  /* width: 300px; */
  height: 400px;
  color: blue;
  background: white;
  position: absolute;
  right: 2.5%;
  left: 50%;
  top: 12.5%;
}

/* tablet */
@media (max-width: 1024px) {
  .chat {
    border-radius: unset;
  }
  .messages {
    height: calc(99vh - 15em);
  }
  .input {
    height: 5em;
  }
}

/* Mobile Devices*/
@media (max-width: 576px) {
  .chat {
    border-radius: 0;
  }
  .messages > div {
    width: 95%;
  }
  .heading.bar {
    margin-right: 0;
    margin-left: 0;
    display: flex;
    justify-items: center;
  }
  .topbar {
    grid-template-columns: 1fr 1fr 9fr 1fr;
  }
  .mobile.back {
    background: transparent;
    padding: 20%;
  }

  .input {
    width: 90%;
  }
  .textarea {
    font-weight: 200;
    letter-spacing: 1.2px;
    font-size: 0.8rem;
    width: calc(35em * 0.8);
    max-height: calc(6em * 0.8);
  }
}
</style>
