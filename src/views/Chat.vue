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
        <img src="/assets/DPs/male02.png" alt="" class="dp" style />
        <div>
          <h3>{{ Contact.name }}</h3>
          <p>Online 8 mins ago</p>
        </div>
        <div><img src="/assets/icons/dots.svg" alt="" /></div>
      </li>
    </div>
    <div class="messages">
      <transition-group name="messages" tag="div" @enter="onEnter">
        <section
          v-for="(message, index) in Messages"
          :key="message.date"
          :data-index="10 - index"
        >
          <article
            :class="message.to === Contact.username ? `sent` : `received`"
          >
            <img src="/assets/DPs/male01.png" alt="" class="dp" />
            <transition @enter="handleEnter">
              <p>{{ message.content }}</p>
            </transition>
          </article>
          <time :class="message.to === Contact.username ? `sent` : `received`">{{
            new Date(message.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          }}</time>
        </section>
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
export default {
  name: "chat",
  props: [],
  components: {},
  setup() {
    const input = ref("");

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
    const handleEnter = (el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        delay: el.dataset.index / 150,
        ease: "ease-out",
        position: absolute,
        duration: 0.2,
      });
      console.log(2);
    };

    return {
      input,
      Contact,
      Messages,
      handleSend,
      handleSendButton,
      onEnter,
      handleEnter,
    };
  },
  beforeMount() {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      this.Contact = data.filter(
        (datum) => datum.username === this.$route.params.contact
      )[0];

      console.log(this.Contact);
    });
    setInterval(() => {
      axios.get("http://localhost:3000/messages").then(({ data }) => {
        const sortedData = data
          .filter(
            (datum) =>
              datum.to === this.Contact.username ||
              datum.from === this.Contact.username
          )
          .sort((x, y) => Number(new Date(y.date)) - Number(new Date(x.date)));
        this.Messages = sortedData;

        // console.log(this.Messages)x
      });
    }, 1000);
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
article {
  width: 70%;
  margin: 0.75em 0.4em;
  font-size: 0.8rem;
  margin-left: auto;
  display: flex;
  margin-left: auto;
  flex-direction: row-reverse;
}

article p {
  background: var(--dp);
  flex: 1;
  margin: 0 1.5em;
  box-sizing: content-box;
  padding: 0.8em 1.2em;
  border-radius: 1em;
}
article > img.dp {
  object-fit: contain;
  padding: 1%;
}
.received {
  margin-left: 5px;
  flex-direction: row;
}

.sent {
  --dp: #178339;
}
time {
  margin: 0 6em;
  font-size: 0.55rem;
  font-weight: 300;
  margin-right: auto;
  width: fit-content;
}
time.sent {
  margin-left: auto;
  margin-right: 2em;
  display: block;
}
time.received {
  margin-right: auto;
  margin-left: 6em;
  display: block;
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
/* .messages-enter-from {
  opacity: 0;
  transform: translateX(40px);
}*/
/* .messages-enter-active,
.messages-move {
  transition: 0.2s;
} */

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
  article {
    width: 82.5%;
    font-weight: 200;
    letter-spacing: 1.2px;
  }
  article p {
    margin: 0 0.75em;
  }
  time {
    font-size: 0.65rem;
    font-weight: 200;
    letter-spacing: 1.2px;
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
