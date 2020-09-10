import Vue from 'vue'
import VueRouter from 'vue-router';
import Profile from "@/views/Profile";
import RepositoriesTabContent from "@/components/RepositoriesTabContent";
import OverviewTabContent from "@/components/OverviewTabContent";
import EmptyState from "@/components/EmptyState";
import Home from '@/views/Home.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile/:username',
    component: Profile,
    children: [
      {
        path: "/",
        alias: "/profile/:username/overview",
        name: "overview",
        component: OverviewTabContent,
        default: true
      },
      {
        path: "/profile/:username/repositories",
        name: "repositories",
        component: RepositoriesTabContent,
      },
      {
        path: "/profile/:username/projects",
        name: "projects",
        component: EmptyState,
      },
      {
        path: "/profile/:username/packages",
        name: "packages",
        component: EmptyState,
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
