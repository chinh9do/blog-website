import { createStore } from "vuex";
import AuthModule from "./modules/auth";
import BlogsModule from "./modules/blog";
import PostsModule from "./modules/post";

const store = createStore({
  modules: {
    auth: AuthModule,
    blog: BlogsModule,
    postsModule: PostsModule,
  },
  state() {

  }
});

export default store;
