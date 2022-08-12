import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Blog from "./components/Blogs";
import Post from "./components/Posts";
import PostDetail from "./components/Posts/postDetail";
import Signin from "./components/User/signin";
import NotFound from './components/Utils/notFound'
import Dashboard from './components/Dashboard'
import store from "./store";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blogs", name: "blogs", component: Blog },
    { path: "/blog:id", name: "blog", component: Blog },
    { path: "/posts", name: "posts", component: Post },
    { path: "/post:id", name: "postDetail", component: PostDetail },
    { path: "/signin", name: "signin", component: Signin },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path:'/:notFound(.*)', component: NotFound }
  ],
});

routes.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state['user/loggedIn']) {
    next('/signin');
  } else {
    next()
  }
});


export default routes;
