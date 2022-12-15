<template>
  <div class="route-link">
    <nav>
      <router-link to="/public/suggestion"
        >Switch to Public Suggestion Page</router-link
      >
    </nav>
  </div>
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
.route-link {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  margin-right: 20px;
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
