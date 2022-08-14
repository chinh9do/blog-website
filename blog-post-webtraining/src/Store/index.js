import { createStore } from "vuex";
import AuthModule from "./modules/auth";
import BlogsModule from "./modules/blog";
import PostsModule from "./modules/post";
import NotificationsModule from "./modules/notify";

const store = createStore({
  modules: {
    auth: AuthModule,
    blog: BlogsModule,
    post: PostsModule,
    notify: NotificationsModule
  },
  state() {

  }
});

export default store;
