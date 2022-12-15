<template><h1></h1></template>

<script>
export default {
  name: "SearchButton",
  /*computed: {
    buttonStyle() {
      return ["bg-clr-white", "bdr-r-025rem", "bdr-05-s-p01"];
    },
    iconStyle() {
      return ["clr-purple-01"];
    },
  },*/
};
</script>

<style scoped>
button {
  padding-block: 0.5rem;
  padding-inline: 0.7rem;

  background-color: var(--clr-purple-01);

  border: none;
  border-radius: 0.25rem;
}

svg {
  color: var(--clr-white-02);
}
</style>
