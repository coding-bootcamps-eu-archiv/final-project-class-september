<template>
  <button id="search-button" class="background">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
  
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  </button>
</template>

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
  padding-block: .5rem;
  padding-inline: .7rem;

  background-color: var(--clr-purple-01);

  border: none;
  border-radius: 0.25rem;
}

svg {
  color: var(--clr-white-02);
}
</style>
