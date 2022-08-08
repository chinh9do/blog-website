import { createStore } from "vuex";
import AuthModule from "./auth";
import BlogsModule from "./blogs";
import PostsModule from "./posts";

const store = createStore({
  modules: {
    auth: AuthModule,
    blog: BlogsModule,
    postsModule: PostsModule,
  },
});

export default store;
