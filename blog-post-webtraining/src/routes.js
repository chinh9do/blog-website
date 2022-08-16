import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Posts from "./components/Posts";
import PostDetail from "./components/Posts/postDetail";
import Signin from "./components/User/signin";
import NotFound from "./components/Utils/notFound";
import Dashboard from "./components/User/Dashboard";
import store from "./store";
import UserBlogs from "./components/User/Dashboard/Blog";
import UserPosts from "./components/User/Dashboard/Post";
import UserAddBlog from "./components/User/Dashboard/Blog/add";
import UserAddPost from "./components/User/Dashboard/Post/add";
import UserUpdateBlog from "./components/User/Dashboard/Blog/update";
import UserUpdatePost from "./components/User/Dashboard/Post/update";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blogs", name: "blogs", component: Blogs },
    { path: "/blog/:id", name: "blog", component: Blogs },
    { path: "/posts", name: "posts", component: Posts },
    { path: "/post/:id", name: "postDetail", component: PostDetail },
    { path: "/signin", name: "signin", component: Signin },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        { path: "posts", name: "user-posts", component: UserPosts },
        { path: "blogs", name: "user-blogs", component: UserBlogs },
        {
          path: "blog/create",
          name: "user-create-blog",
          component: UserAddBlog,
        },
        {
          path: "blog/update/:id",
          name: "user-update-blog",
          component: UserUpdateBlog,
        },
        {
          path: "post/create",
          name: "user-create-post",
          component: UserAddPost,
        },
        {
          path: "post/update/:id",
          name: "user-update-post",
          component: UserUpdatePost,
        },
      ],
    },
    { path: "/:notFound(.*)*", name: "404", component: NotFound },
  ],
});

routes.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/getLoggedInStatus"]) {
    next("/signin");
  } else {
    next();
  }
});

export default routes;
