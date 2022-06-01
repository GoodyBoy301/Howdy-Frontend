<template>
  <div class="chat">
    <Messages />
    <Message />
    <Head />
  </div>
</template>

<script>
import Head from "./Head.vue";
import Message from "./Message.vue";
import Messages from "./Messages.vue";
export default {
  components: { Head, Message, Messages },
};
</script>

Head
