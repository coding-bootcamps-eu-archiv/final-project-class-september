<template>
  <AppHeader />

  <main>
    <router-view />

    <div id="app"></div>
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
/***** general stylings *****/

* {
  box-sizing: border-box;
  margin: 0;
  font-size: 16px;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}

template {
  background-color: var(--clr-magenta-01);
}

:root {
  --clr-purple-01: hsl(268, 75%, 44%);
  --clr-purple-02: hsl(268, 58%, 55%);
  --clr-white-02: hsl(0, 0%, 98%);
  --clr-grey: hsla(0, 0%, 0%, 0.6);
  --clr-black: hsl(0, 0%, 0%);
  --clr-magenta-01: hotpink; /*delete*/
  --clr-meganta-02: salmon; /*release?*/
  --clr-blue-01: dodgerblue; /*edit*/
  --clr-green-01: rgb(63, 174, 63); /*create*/
}

/******** utilities *******/

/***fnt-sizes***/

/***fnt-colours***/
.clr-white-02 {
  color: var(--clr-white-02);
}

.clr-black {
  color: var(--clr-black);
}

.clr-purple-01 {
  color: var(--clr-purple-01);
}

/***bg-colours***/
.bg-clr-white {
  background-color: var(--clr-white-02);
}

.bg-clr-purple {
  background-color: var(--clr-purple-01);
}

/***border***/
.brd-0 {
  border: none;
}
/*s=solid, p=purple*/
.brd-rem-s-p-01 {
  border: 1rem solid var(--clr-purple-01);
}

/***boxing***/

/*tbd*/
</style>
