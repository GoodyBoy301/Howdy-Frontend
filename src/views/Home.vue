<template>
  <section class="chat home">
    <div class="heading bar">
      <li class="topbar">
        <img src="/assets/icons/back.svg" alt="" class="mobile back" />
        <img src="/assets/DPs/male02.png" alt="" class="dp" />
        <div>
          <h3>Kush Gibson</h3>
          <p>Online 8 mins ago</p>
        </div>
        <div><img src="/assets/icons/dots.svg" alt="" /></div>
      </li>
    </div>
    <h3 class="logout__desktop">Logout</h3>
  </section>
</template>

<script>
export default {};
</script>

<style>
.home {
  position: relative;
}

.logout__desktop {
  position: absolute;
  bottom: 1em;
  left: 0;
  right: 0;
  text-align: center;
  color: #fe5f58;
}

/* Mobile Devices*/
@media (max-width: 576px) {
  .chat.home {
    grid-area: 1;
    width: 0;
  }
  .logout__desktop {
    display: none;
  }
}
</style>
