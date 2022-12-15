<template>
  <form>
    <input
      type="text"
      name=""
      id="search-input"
      placeholder="tipe in your search-keyword"
      class="search-bar"
    />
    <button class="backg">
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
    </button>
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
  position: relative;
  left: 10px
}

.backg {
  background-color: var(--clr-purple-01);
  position: relative;
  border-radius: 2rem;
  right: 39px;
  width: 12%;
  height: 37px;
  top: -6px;
  border: none;
}
.backg:hover{
  color: black;
  
  
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 10px;
  color: white;

}
.search-icon:hover{
  box-shadow: 2px 2px 2px 2px var(--clr-purple-1);
  opacity: 0.7;
}
</style>
