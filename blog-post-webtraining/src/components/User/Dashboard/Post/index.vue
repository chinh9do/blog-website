<template>
  <div>
    <dashboard-title title="Posts" />
    <base-button :btnName="'Add Post'" :type="'post'" :action="'create'" />
    <Loader v-if="loading" />
    <div v-else class="pt-2">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Blog Name</th>
            <th scope="col">Title</th>
            <th scope="col">Create Date</th>
            <th scope="col">Content</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="post.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ post.blogName }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.createDate }}</td>
            <td>{{ post.content }}</td>
            <td>
              <button
                v-if="haveUpdatePermission"
                @click="directToUpdate(post.id)"
                class="btn btn-primary btn-sm"
              >
                Edit
              </button>
              |
              <button
                v-if="haveDeletePermission"
                @click="deletePost({ blogId: post.blogId, postId: post.id })"
                class="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DashboardTitle from "@/components/Utils/dashboardTitle";
import Loader from "@/components/Utils/loader";
import Permissions from "@/shared/constant";
import TokenService from "@/services/token.service";

export default {
  components: { DashboardTitle, Loader },
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  computed: {
    haveUpdatePermission() {
      return TokenService.getTokenInfo()[Permissions.UPDATE_POST] !== undefined;
    },
    haveDeletePermission() {
      return TokenService.getTokenInfo()[Permissions.DELETE_POST] !== undefined;
    },
  },
  methods: {
    directToUpdate(postId) {
      this.$router.push({ name: "user-update-post", params: { id: postId } });
    },
    getPosts() {
      this.loading = true;
      this.$store.dispatch("post/getPosts").then((response) => {
        if (response?.data) {
          this.loading = false;
          this.posts = response.data;
        }
      });
    },
    deletePost(payload) {
      this.$store.dispatch("post/removePostById", payload).then(() => {
        this.getPosts();
      });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>