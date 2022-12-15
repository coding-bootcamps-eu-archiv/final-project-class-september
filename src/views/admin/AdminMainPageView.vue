<template>
  <main>
    <nav><router-link to="/">Switch to Public Main Page</router-link></nav>
    <h1 class="admin-heading">Admin-Main-Page</h1>
    <div>
      <SearchInput />
      <SearchButton />
    </div>
    <AdminListingView />
  </main>
</template>

<script>
import AdminListingView from "@/components/AdminListingView.vue";
import SearchInput from "@/components/SearchInput.vue";
import SearchButton from "@/components/SearchButton.vue";
export default {
  name: "MainPage",
  components: {
    AdminListingView,
    SearchInput,
    SearchButton,
  },
};
</script>

<style scoped>
.admin-heading {
  text-align: center;
}
div {
  width: 100%;
}
</style>
