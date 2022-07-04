<template>
  <section
    v-for="(message, index) in Messages"
    :key="message.date"
    :data-index="10 - index"
  >
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
  props: ["Contact", "Messages"],
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

      return { onEnter };
    };
  },
};
</script>

<style></style>
