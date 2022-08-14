import { errorNotify, successNotify } from "@/shared/notifications";
import PostService from "@/services/post.service";

const postsModule = {
  namespaced: true,
  state() {
    return {
      allPosts: [
        {
          id: 1,
          title: "Post title",
          blogId: 1,
          shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          id: 2,
          title: "Post title",
          blogId: 1,
          shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          id: 3,
          title: "Post title",
          blogId: 1,
          shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          id: 4,
          title: "Post title",
          shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          id: 5,
          title: "Post title",
          blogId: 1,
          shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          id: 6,
          title: "Post title",
          blogId: 1,
          shortContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
      ],
      post: {},
    };
  },
  getters: {
    getPosts(state) {
      return state.allPosts;
    },
    getPostById(state, id) {
      return state.allPosts.find((p) => p.id == id);
    },
  },
  mutations: {},
  actions: {
    async getPostById({ commit, state }, postId) {
      try {
        // TODO: Handle API to get post
        // const post = await PostService.getByPostId(postId);
        // return post;
        return state.allPosts.find((p) => p.id == postId);
      } catch (error) {
        errorNotify(commit, error.message);
      }
    },
  },
};

export default postsModule;
