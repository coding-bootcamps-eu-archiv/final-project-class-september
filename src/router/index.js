import { createRouter, createWebHistory } from "vue-router";
import AdminMainPageView from "@/views/admin/AdminMainPageView.vue";
import AdminWrapperView from "@/views/admin/AdminWrapperView.vue";
import AdminEditView from "@/views/admin/AdminEditView.vue";

import PublicWrapperView from "@/views/public/PublicWrapperView.vue";
import PublicViewMainPageView from "@/views/public/PublicViewMainPageView.vue";

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
        component: PublicViewMainPageView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
