<template>
  <section>
    <div>
      <input type="text" name="search-bar" id="search-bar" />
      <label for="search-bar">search post</label>
    </div>
    <button id="search-button">search</button>
  </section>
  <section>
    <div>
      <label for="instagram">Instagram</label>
      <input type="radio" name="instagram" id="instagram" />
    </div>
    <div>
      <label for="youtube">Youtube</label>
      <input type="radio" name="youtube" id="youtube" />
    </div>
    <div>
      <label for="cbe">Coding Bootcamps Europe</label>
      <input type="radio" name="cbe" id="cbe" />
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterSearchComponent",
};
</script>

<style scoped></style>
