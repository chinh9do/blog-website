import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/Blogs/blogDetail";
import Posts from "./components/Posts";
import PostDetail from "./components/Posts/postDetail";
import Signin from "./components/User/signin";
import NotFound from "./components/Utils/notFound";
import Dashboard from "./components/User/Dashboard";
import MainDashBoard from "./components/User/Dashboard/main";
import store from "./store";
import UserBlogs from "./components/User/Dashboard/Blog";
import UserPosts from "./components/User/Dashboard/Post";
import UserAddBlog from "./components/User/Dashboard/Blog/add";
import UserAddPost from "./components/User/Dashboard/Post/add";
import UserUpdateBlog from "./components/User/Dashboard/Blog/update";
import UserUpdatePost from "./components/User/Dashboard/Post/update";
import Permissions from "./shared/constant";
import TokenService from "./services/token.service";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blogs", name: "blogs", component: Blogs },
    { path: "/blog/:id", name: "blogDetail", component: BlogDetail },
    { path: "/posts", name: "posts", component: Posts },
    { path: "/post/:id", name: "postDetail", component: PostDetail },
    {
      path: "/signin",
      name: "signin",
      meta: { signPage: true },
      component: Signin,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        { path: "", component: MainDashBoard, name: "main-dashboard" },
        { path: "posts", name: "user-posts", component: UserPosts },
        { path: "blogs", name: "user-blogs", component: UserBlogs },
        {
          path: "blog/create",
          name: "user-create-blog",
          component: UserAddBlog,
          beforeEnter: (to, from) => {
            if (!(TokenService.getTokenInfo()[Permissions.CREATE_BLOG] != null &&
              TokenService.getTokenInfo()[Permissions.CREATE_BLOG] != undefined)) {
              return false
            }
          }
        },
        {
          path: "blog/update/:id",
          name: "user-update-blog",
          component: UserUpdateBlog,
          beforeEnter: (to, from) => {
            if (!(TokenService.getTokenInfo()[Permissions.UPDATE_BLOG] != null &&
              TokenService.getTokenInfo()[Permissions.UPDATE_BLOG] != undefined)) {
              return false
            }
          }
        },
        {
          path: "post/create",
          name: "user-create-post",
          component: UserAddPost,
          beforeEnter: (to, from) => {
            if (!(TokenService.getTokenInfo()[Permissions.CREATE_POST] != null &&
              TokenService.getTokenInfo()[Permissions.CREATE_POST] != undefined)) {
              return false
            }
          }
        },
        {
          path: "post/update/:id",
          name: "user-update-post",
          component: UserUpdatePost,
          beforeEnter: (to, from) => {
            if (!(TokenService.getTokenInfo()[Permissions.UPDATE_BLOG] != null &&
              TokenService.getTokenInfo()[Permissions.UPDATE_BLOG] != undefined)) {
              return false
            }
          }
        },
      ],
    },
    { path: "/:notFound(.*)*", name: "404", component: NotFound },
  ],
});

routes.beforeEach((to, _, next) => {
  store.dispatch("auth/autoLogin").then(() => {
    if (to.meta.signPage && store.getters["auth/getLoggedInStatus"]) {
      next("/dashboard");
    } else {
      if (to.meta.requiresAuth && !store.getters["auth/getLoggedInStatus"]) {
        next("/signin");
      } else {
        next();
      }
    }
  });
});

export default routes;
