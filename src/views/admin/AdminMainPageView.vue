<template>
  <main>
    <div class="route-link">
      <nav>
        <router-link to="/">Switch to Public Main Page</router-link> <br />
        <router-link to="/admin/create"
          >Switch to Admin Create Post Page</router-link
        >
      </nav>
    </div>
    <h1 class="admin-heading">Admin-Main-Page</h1>
    <div>
      <SearchInput />
      <SearchButton />
    </div>
    <div class="create-wrapper">
      <a href="http://localhost:8080/admin/create">
        <button class="create">+ create</button>
      </a>
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
  justify-content: center;
  padding-bottom: 20px;
}

.create {
  border-radius: 10px;
  background-color: var(--clr-white-02);
  color: var(--clr-purple-01);
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  border: 2px solid white;
}
.create:active {
  background-color: var(--clr-white-02);
  color: var(--clr-green-01);

  cursor: pointer;
  border: 2px solid var(--clr-green-01);
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
  padding-top: 70px;
  padding-bottom: 40px;
}
div {
  width: 100%;
}
</style>
