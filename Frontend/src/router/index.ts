import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/creat_user",
    name: "create_user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateUserView.vue"),
  },

  {
    path: "/trending_games",
    name: "trending_games",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TrendingView.vue"),
  },
  {
    path: "/best_games",
    name: "best_games",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BestGamesView.vue"),
  },
  {
    path: "/new_games",
    name: "new_games",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewGamesView.vue"),
  },
  {
    //this is a dynamic route using params to get data from the data base using the :title and :id to route the user to the proper page using one component
    path: '/current_game/:title/:id',
    name: "current_game",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CurrentGameView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass: 'active'
});

export default router;
