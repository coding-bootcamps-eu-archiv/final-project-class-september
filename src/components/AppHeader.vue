<template>
    <div class="sticky">
      <div class="head">
        <header>
          <h1 class="clr-white-02">ATTENDEE FEED</h1>
          <h2 class="clr-white-02">Coding Bootcamps Europe</h2>
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

.head {
  background-color: var(--clr-purple-01);

  padding-block: 1.5rem;

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

sticky {
  position: -webkit-sticky;
  position: sticky;

  top: 0;
  height: 200px;
  background-color: var(--clr-purple-01);
  z-index: 9;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 70%, 0 50%);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.arrow {
  position: relative;
  height: 30px;
  background-color: var(--clr-purple-01);
  clip-path: polygon(0 0, 100% 0, 100% 0, 50% 100%, 0 0);
}

.arrow-sdw {
  background-color: var(--clr-purple-01);
  height: 80px;
  position: absolute;
  top: 90px;
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
