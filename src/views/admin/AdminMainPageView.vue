<template>
  <main>
    <div class="route-link">
      <nav>
        <router-link to="/">Switch to Public Main Page</router-link>
      </nav>
    </div>
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
.admin-heading {
  text-align: center;
}
div {
  width: 100%;
}
</style>
