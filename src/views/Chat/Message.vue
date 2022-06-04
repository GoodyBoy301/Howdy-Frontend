<template>
  <div class="message">
    <textarea
      autofocus
      maxlength="160"
      placeholder="type a message..."
      spellcheck="false"
      rows="20"
    />
    <img class="send" src="../../assets/send.svg" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.message {
  position: fixed;
  bottom: 0;
  width: calc(100% / 3.1);
  display: flex;
  align-items: flex-end;
}

.send {
  width: 30px;
  cursor: pointer;
  border-radius: 100%;
  margin: 2% 0;
  transition: all 0.1s ease-in;
}
.send:hover {
  transform: scale(1.1);
}
textarea,
textarea:active {
  background: var(--secondary);
  opacity: 0.8;
  border: 0;
  outline: none;
  font-size: 19px;
  color: black;
  resize: none;
  font-size: 16px;
  height: min-content;
  display: flex;
  height: 30px;
  width: 90%;
  margin: 6px;
  padding: 4px;
  font-family: "Segoe UI";
  transition: all 0.2s ease-in;
  border-radius: 30px;
}
textarea:focus {
  height: 80px;
  opacity: 1;
  border-radius: 0;
}
textarea::placeholder {
  opacity: 0.8;
  color: #444;
  padding: 0 1ch;
}
/* tablet */
@media (max-width: 900px) {
  .message {
    width: 100%;
    bottom: 50px;
  }
}
</style>
