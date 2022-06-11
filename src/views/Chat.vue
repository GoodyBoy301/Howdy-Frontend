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
    <div class="messages">
      <div>
        <article>
          <img src="/assets/DPs/male01.png" alt="" class="dp" />
          <p>ipsum dolor, sit amet consec</p>
        </article>
        <article class="receive">
          <img src="/assets/DPs/male02.png" alt="" class="dp" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </article>
        <article>
          <img src="/assets/DPs/male01.png" alt="" class="dp" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            facilis beatae earum, laudantium
          </p>
        </article>
        <article class="receive">
          <img src="/assets/DPs/male02.png" alt="" class="dp" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            velit eveniet. Sit laborum fugit praesentium non quas odio
            consequatur,
          </p>
        </article>
        <article>
          <img src="/assets/DPs/male01.png" alt="" class="dp" />
          <p>ipsum dolor, sit amet consec</p>
        </article>
        <article class="receive">
          <img src="/assets/DPs/male02.png" alt="" class="dp" />
          <p>
            Lorem ipsum dolor sit amet consat corrupti numquam eos delectus
            officiis dolorem neque error libero saepe!
          </p>
        </article>
      </div>
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
  height: inherit;
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

.messages {
  height: 50%;
  margin: 2.5% 0;
}
.messages > div {
  margin: 0 auto;
  width: 82.5%;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  align-content: flex-start;
  overflow-y: scroll;
}
article {
  width: 70%;
  margin: 5px;
  font-size: 0.8rem;
  margin-left: auto;
  display: flex;
  margin-left: auto;
  flex-direction: row-reverse;
}

article p {
  background: #22a116;
  flex: 1;
  margin: 0 1.5em;
  box-sizing: content-box;
  padding: 0.8em 1.2em;
  border-radius: 1em;
}
article > img.dp {
  object-fit: contain;
  padding: 1%;
  background: #22a116 !important;
}
article.receive > img.dp {
  background: #804d0a !important;
}
.receive {
  margin-left: 5px;
  flex-direction: row;
}
.receive p {
  background: #804d0a;
}
</style>
