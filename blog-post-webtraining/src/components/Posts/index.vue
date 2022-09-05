<template>
  <div class="container">
    <div class="post-feed row">
      <div class="col-md-9">
        <div class="post-feed-header pl-2">Welcome to Blogs.com</div>
        <div v-if="!posts" class="pl-2">
          No posts
        </div>
        <div v-else class="post-feed-item" v-for="post in posts" :key="post.id">
          <div><img src="http://placebeard.it/100/100" /></div>
          <div class="post-feed-item__info">
            <div class="post-info-meta--inline">{{ post.title }}</div>
            <div class="post-info-content--inline" v-html="post.content">
            </div>
            <div class="d-flex justify-content-end post-info-footer--inline">
              <div class="mr-auto">Create Date: 10-10-2021</div>
              <div class="mr-auto">22 views</div>
              <router-link :to="{ name: 'postDetail', params: { id: post.id } }">
                Go to post
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="left-menu">Menu nè</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      posts: null
    }
  },
  methods: {
    ...mapActions('post', ['getPosts']),
  },
  mounted() {
    this.getPosts().then((response) => {
      if (response?.data) {
        this.posts = response.data;
      }
    });
  }

}

</script>
<style>
</style>