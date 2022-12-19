<template>
  <main>
    <h1 class="admin-heading">Admin-Main-Page</h1>

    <AdminListingView />
  </main>
</template>

<script>
import AdminListingView from "@/components/AdminListingView.vue";

export default {
  name: "MainPage",
  components: {
    AdminListingView,
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

.admin-heading {
  text-align: center;
  padding-top: 70px;
  padding-bottom: 40px;
}

.title {
  position: relative;
}

@media only screen and (min-width: 1140px) {
  .around {
    width: 960px;
    margin: 0 auto;
  }
}
</style>
