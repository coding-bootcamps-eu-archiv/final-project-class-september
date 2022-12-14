<template>
  <div>
    <header>
      <h1 class="clr-white-02">ATTENDEE FEED</h1>
      <h2 class="clr-white-02">Coding Bootcamps Europe</h2>
    </header>
  </div>
  <div class="arrow arrow-sdw"></div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
/***general***/
div {
  background-color: var(--clr-purple-01);

  padding-block: 2rem;

  display: flex;
  justify-content: center;
  text-align: center;

  position: relative;
}

h1 {
  font-size: 2.5rem;
  font-weight: 400;
}

h2 {
  font-size: .75rem;
  font-weight: 400;
}

/***specific***/
.arrow {
  height: 30px;
  background-color: var(--clr-purple-01);
  clip-path: polygon(0 0, 100% 0, 100% 15%, 50% 100%, 0 15%);
}

.arrow-sdw {
  position: absolute;
  background-color: var(--clr-purple-02);
  z-index: -1;
  bottom: -5px;
  width: 100%;
}

/***utilities***/

.clr-white-02 {
  color: var(--clr-white-02);
}
</style>
