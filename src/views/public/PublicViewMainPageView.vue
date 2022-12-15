<template>
  <div class="route-link">
    <nav><router-link to="/admin">Switch to Admin Main Page</router-link></nav>
  </div>

  <h1 class="public-heading">Public-Main-Page</h1>

  <SearchInput />
  <SearchButton />
  <router-view></router-view>
  <div class="create-wrapper">
    <button class="create">Add Suggestions</button>
  </div>
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
.create-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
}

.create {
  border: 2px solid var(--clr-blue-01);
  border-radius: 10px;
  background-color: var(--clr-white-02);
  color: var(--clr-blue-01);
  font-weight: bold;
  margin-right: 80px;
  margin-top: 40px;
  cursor: pointer;
}
.create:hover {
  background-color: var(--clr-white-02);
  color: var(--clr-green-01);
  box-shadow: 1px 1px 1px 1px var(--clr-green-01);
  border: 2px solid var(--clr-green-01);
  cursor: pointer;
}
.route-link {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  display: none;
}
nav {
  margin-top: 20px;
  margin-right: 20px;
}

.public-heading {
  margin-top: 40px;
  text-align: center;
}
</style>
