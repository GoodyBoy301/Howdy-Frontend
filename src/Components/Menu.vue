<template>
  <div class="menuOff" id="menuRemote">
    <img src="/assets/icons/dots.svg" alt="" @click="handleMenu" />
    <div class="userInfo">
      <section class="profile">
        <div class="banner">
          <img
            :src="`/assets/DPs/${Contact.pic}.png`"
            alt=""
            class="previewDP profileDP"
          />
        </div>
        <div>
          <h5 class="myName">{{ Contact?.name }}</h5>
          <h6 class="bio">
            {{ Contact?.bio }}
          </h6>
        </div>
      </section>
      <h3 class="logout__desktop" @click="Logout">Logout</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Contact"],
  setup() {
    const handleMenu = (e) => {
      e.target.parentElement.classList.toggle("menuOn");
    };

    return { handleMenu };
  },
};
</script>

<style>
.userInfo {
  /* width: 300px; */
  height: 400px;
  color: blue;
  background: white;
  position: absolute;
  right: 2.5%;
  left: 50%;
  top: 12.5%;
  z-index: 10;
}
.menuOff .userInfo {
  display: none;
}
.menuOff img:hover ~ .userInfo {
  display: unset;
  opacity: 0.8;
}
.menuOn .userInfo {
  display: unset;
  opacity: 1 !important;
}
</style>
