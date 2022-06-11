<template>
  <section class="chat">
    <div class="heading">
      <li class="topbar">
        <img src="/assets/DPs/male02.png" alt="" class="dp" />
        <div>
          <h3>Kush Gibson</h3>
          <p>Online 8 mins ago</p>
        </div>
        <div><img src="/assets/icons/dots.svg" alt="" /></div>
      </li>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.chat {
  background: #51312eee;
  border-radius: 0 15px 15px 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(13px);
}
.heading .topbar {
  display: grid;
  width: 100%;
  align-items: center;
  padding: 0;
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
</style>
