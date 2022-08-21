import BlogService from "@/services/blog.service";
import TokenService from "@/services/token.service";
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
        return await BlogService.getAll();
        // commit("setBlogs", blogs);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
    async getBlogById({ commit }, blogId) {
      try {
        return await BlogService.getById(blogId);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
    async getBlogByUserId({ commit }) {
      try {
        const userId = TokenService.getUserId();
        const blogs = await BlogService.getByUserId(userId);
        // commit("setBlogs", blogs);
        return blogs;
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
    async addBlog({ commit }, blog) {
      try {
        blog.userId = TokenService.getUserId();
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
        const response = await BlogService.deleteBlog(id);
        // const newBlogs = state.allBlogs.filters((b) => b.id !== id);
        // commit("setBlogs", newBlogs);
        // TODO
        successNotify(commit, "Delete Successfully");
        // successNotify(commit);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
  },
};

export default blogsModule;
