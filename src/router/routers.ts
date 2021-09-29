import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        component: () => import("@/layouts/CommonLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("@/view/Home/Home.vue"),
            },
        ]
    },
    {
        path: "/",
        component: () => import("@/layouts/NoneLayout.vue"), children: [
            {
                path: "network-error",
                component: () => import("@/view/NetworkError.vue"),
            },
            {
                path: "*",
                component: () => import("@/view/NotFound.vue"),
            },
        ]
    }
];
const router = new VueRouter({
    mode: "history",
    routes
});
// router.beforeEach((to, from, next) => {
//   const token = AuthStore().token;
//   if (to.path !== "/login") {
//     if (token) {
//       next();
//     } else {
//       next("/login");
//     }
//   } else {
//     if (token) {
//       next("/");
//     } else {
//       next();
//     }
//   }
// });

export default router;
