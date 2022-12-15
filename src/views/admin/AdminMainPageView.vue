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
    <div class="create-wrapper">
      <button class="create">+ Create Post</button>
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
