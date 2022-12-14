<template>

  <form>
  <div class="backg"></div>
    <input
      type="text"
      name=""
      id="search-input"
      placeholder="tipe in your search-keyword"
      class="search-bar"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="search-icon"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  </form>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style scoped>
form {
  max-width: 400px;
  position: relative;
}

.search-bar {
  font-size: 1rem;
  width: 70%;
  border-radius: 2rem;
  border: 2px solid var(--clr-purple-02);
  padding: 0.5rem 0.75rem;
}

.backg {
  background-color: var(--clr-purple-01);
  position: absolute;
  border-radius: 2rem;
  right: 0px;
  width: 12%;
  height: 100%;
}

.search-icon {
  position: absolute;
  right: 14px;
  top: 12px;
  color: var(--clr-white-02);
}
</style>
