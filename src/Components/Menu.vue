<template>
  <div class="menuOff" id="menuRemote">
    <img src="/assets/icons/dots.svg" alt="" @click="handleMenu" />
    <div class="userInfo">
      <Profile :User="Contact" />
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
export default {
  components: { Profile },
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
/* Mobile Devices*/
@media (max-width: 576px) {
  .userInfo {
    left: 5%;
  }
  .menuOff img:hover ~ .userInfo {
    opacity: 0;
  }
}
</style>
