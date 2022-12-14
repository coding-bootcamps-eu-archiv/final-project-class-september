<template>
  <nav><router-link to="/admin">Switch to Admin Main Page</router-link></nav>
  <h1 class="public-heading">Public-Main-Page</h1>
  <SearchInput />
  <SearchButton />
  <router-view></router-view>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchButton from "@/components/SearchButton.vue";
export default {
  name: "publicView",
  components: {
    SearchInput,
    SearchButton,
  },
};
</script>
<style scoped>
.public-heading {
  text-align: center;
}
</style>
