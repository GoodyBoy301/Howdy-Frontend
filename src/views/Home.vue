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
  </section>
</template>

<script>
export default {};
</script>

<style>
/* Mobile Devices*/
@media (max-width: 576px) {
  .home {
    grid-area: 1;
    width: 0;
  }
}
</style>
