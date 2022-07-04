<template>
  <div @mouseenter="handleMenu">
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
      console.log(e.target);
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
}
</style>
