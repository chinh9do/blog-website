import BlogService from "@/services/blog.service";
import { errorNotify, successNotify } from "@/shared/notifications";

const blogsModule = {
  namespaced: true,
  state() {
    return {
      allBlogs: [],
    };
  },
  getters: {
    getBlogs(state) {
      return state.allBlogs;
    },
  },
  mutations: {
    setBlogs(state, blogs) {
      state.allBlogs = blogs;
    },
  },
  actions: {
    async getBlogs({ commit }) {
      try {
        const blogs = await BlogService.getAll();
        commit("setBlogs", blogs);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
    // async getBlogByUserId({ commit }, userId) {
    //   try {
    //     const blogs = await BlogService.getByUserId();
    //     commit("setBlogs", blogs);
    //   } catch (error) {
    //     errorNotify(commit, error.message);
    //   }
    // },
    async addBlog({ commit }, blog) {
      try {
        await BlogService.createBlog(blog);
        // TODO
        successNotify(commit);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
    async updateBlog({ commit }, blog) {
      try {
        await BlogService.updateBlog(blog);
        // TODO
        successNotify(commit);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
    async removeBlogById({ commit, state }, id) {
      try {
        await BlogService.deleteBlog(id);
        const newBlogs = state.allBlogs.filters((b) => b.id !== id);
        commit("setBlogs", newBlogs);
        // TODO
        successNotify(commit);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
  },
};

export default blogsModule;
