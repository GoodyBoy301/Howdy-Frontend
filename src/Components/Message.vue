<template>
  <section>
    <article :class="message.to === Contact.username ? `sent` : `received`">
      <img src="/assets/DPs/male01.png" alt="" class="dp" />
      <transition @enter="onEnter">
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
</template>

<script>
import gsap from "gsap";
export default {
  props: ["Contact", "message"],
  setup() {
    const onEnter = (el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        delay: el.dataset.index / 150,
        ease: "ease-out",
        position: absolute,
        duration: 0.2,
      });
    };
    return { onEnter };
  },
};
</script>

<style>
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
.sent {
  --dp: var(--darkPrimary);
}
.received {
  margin-left: 5px;
  flex-direction: row;
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

/* Mobile Devices*/
@media (max-width: 576px) {
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
}
</style>
