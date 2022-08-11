import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Blog from "./components/Blogs";
import Post from "./components/Posts";
import PostDetail from "./components/Posts/postDetail";
import Signin from "./components/User/signin";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blogs", name: "blogs", component: Blog },
    { path: "/blog:id", name: "blog", component: Blog },
    { path: "/posts", name: "posts", component: Post },
    { path: "/post:id", name: "postDetail", component: PostDetail },
    { path: "/signin", name: "signin", component: Signin },
    // { path: "/login", name: "login", component: NotFound },
  ],
});

// routes.beforeEach((to, from, next) => {
//   store.dispatch()
// })

export default routes;
