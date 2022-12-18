<template>
  <div class="sticky">
    <header class="head">
      <h1 class="clr-white-02">
        <router-link to="/" class="link-style">ATTENDEE FEED</router-link>
      </h1>
      <img
        class="CBE"
        src="https://image.jimcdn.com/app/cms/image/transf/dimension=230x10000:format=png/path/s0bc1816f4b388266/image/i2c7016bab2e2fa88/version/1647271231/image.png"
        alt=""
      />
    </header>
    <div class="arrow"></div>
    <div class="arrow arrow-sdw"></div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.sticky {
  top: 0;
  position: sticky;
  z-index: 1;
}
.CBE {
  width: 25px;
  border-radius: 45%;
}

.head {
  background-color: var(--clr-purple-01);
  padding-block: 0.5rem;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: baseline;
  gap: 20px;
}

h1 {
  font-size: 25px;
  font-weight: 400;
}

h2 {
  font-size: 0.75rem;
  font-weight: 400;
}

/***specific***/
.arrow {
  position: relative;
  height: 15px;
  background-color: var(--clr-purple-01);
  clip-path: polygon(0 0, 100% 0, 100% 0, 50% 100%, 0 0);
}

.arrow-sdw {
  background-color: var(--clr-purple-01);
  height: 35px;
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 50% 80%, 0 35%);
  opacity: 0.7;
  z-index: -9;
}
/***utilities***/

.clr-white-02 {
  color: var(--clr-white-02);
}

.link-style {
  color: inherit;
  text-decoration: none;
  font-size: 1.8rem;
}
</style>
