<template>
  <AppHeader />

  <main class="around">
    <router-view />

    <div id="app" class="around"></div>
  </main>
  <GeneralFooter class="footer-bottom" />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    GeneralFooter,
  },
};
</script>

<style>
/***** general stylings *****/

@media only screen and (min-width: 1140px) {
  .around {
    width: 960px;
    margin: 0 auto;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  _font-size: 16px;
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
  --clr-purple-03: hsl(268, 100%, 71%);
  --clr-gray-01: hsl(0, 0%, 50%);
  --clr-grey-01: hsl(0, 0%, 87%);
  --clr-white-02: hsl(0, 0%, 98%);
  --clr-grey: hsla(0, 0%, 0%, 0.6);
  --clr-black-01: hsl(0, 0%, 0%);
  --clr-magenta-01: hotpink; /*delete*/
  --clr-meganta-02: salmon; /*release*/
  --clr-red-01: hsl(0, 100%, 50%);
  --clr-blue-01: dodgerblue; /*edit*/
  --clr-blue-02: hsl(203, 89%, 53%);
  --clr-blue-03: hsl(210, 90, 40%);
  --clr-green-01: hsl(120, 47%, 46%); /*create*/
  --clr-blue-05: rgba(37, 166, 220, 0.5);
  --clr-green-05: rgba(37, 248, 110, 0.38);
}

/******** utilities *******/

/***fnt-sizes***/

/***fnt-colours***/
.clr-white-02 {
  color: var(--clr-white-02);
}

.clr-black {
  color: var(--clr-black-01);
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
