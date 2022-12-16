import { createRouter, createWebHistory } from "vue-router";
import AdminMainPageView from "@/views/admin/AdminMainPageView.vue";
import AdminWrapperView from "@/views/admin/AdminWrapperView.vue";
import AdminEditView from "@/views/admin/AdminEditView.vue";
import AdminCreatePostView from "@/views/admin/AdminCreatePostView.vue";

import PublicWrapperView from "@/views/public/PublicWrapperView.vue";
import PublicMainPageView from "@/views/public/PublicMainPageView.vue";
import PublicSuggestionsView from "@/views/public/PublicSuggestionView.vue";

const routes = [
  {
    path: "/admin",
    component: AdminWrapperView,
    children: [
      {
        path: "",
        name: "admin-route",
        component: AdminMainPageView,
      },
      {
        path: "edit/:id",
        name: "admin-edit",
        component: AdminEditView,
      },
      {
        path: "create",
        name: "admin-create",
        component: AdminCreatePostView,
      },
    ],
  },
  {
    path: "/public",
    alias: "/",
    component: PublicWrapperView,
    children: [
      {
        path: "",
        name: "public-index",
        component: PublicMainPageView,
      },
      {
        path: "suggestion",
        name: "public-suggestion",
        component: PublicSuggestionsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
