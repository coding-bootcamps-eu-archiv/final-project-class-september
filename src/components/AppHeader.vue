<template>
  <div>
    <div class="head">
      <header>
        <h1 class="clr-white-02">ATTENDEE FEED</h1>
        <h2 class="clr-white-02">Coding Bootcamps Europe</h2>
        <img
          class="CBE"
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=230x10000:format=png/path/s0bc1816f4b388266/image/i2c7016bab2e2fa88/version/1647271231/image.png"
          alt=""
        />
      </header>
    </div>
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
/***general***/
.CBE {
  width: 60px;
  border-radius: 50%;
  margin-top: 10px;
}

.head {
  background-color: var(--clr-purple-01);

  padding-block: 1rem;

  display: flex;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: 400;
}

h2 {
  font-size: 0.75rem;
  font-weight: 400;
}

/***specific***/
.arrow {
  position: relative;
  height: 30px;
  background-color: var(--clr-purple-01);
  clip-path: polygon(0 0, 100% 0, 100% 0, 50% 100%, 0 0);
}

.arrow-sdw {
  background-color: var(--clr-purple-01);
  height: 70px;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 50% 80%, 0 40%);
  opacity: 0.7;
  z-index: 9;
}
/***utilities***/

.clr-white-02 {
  color: var(--clr-white-02);
}
</style>
