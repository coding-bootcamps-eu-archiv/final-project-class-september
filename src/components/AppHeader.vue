<template>
  <header>
    <h1>Attendee Feed</h1>
    <h2>Coding Bootcamps Europe</h2>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.arrow {
  height: 3.5rem;
  position: relative;
  background-color: var(--clr-purple-01);
  clip-path: polygon(0 0, 100% 0, 50% 100%, 0 15%);
}

.arrow-sdw {
  background-color: var(--clr-purple-02);
  position: absolute;
  bottom: -5px;
  width: 100%;
  z-index: -1;
}
</style>
