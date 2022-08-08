import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Blog from "./components/Blogs";
import Post from "./components/Posts";
import Login from "./components/User";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blogs", name: "blogs", component: Blog },
    { path: "/posts", name: "posts", component: Post },
    { path: "/login", name: "login", component: Login },
    // { path: "/login", name: "login", component: NotFound },
  ],
});

export default routes;
