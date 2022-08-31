<template>
  <div class="container">
    <div class="post-feed row">
      <div class="col-md-9">
        <div class="post-feed-header">Welcome to Blogs.com</div>
        <div v-if="blogs" class="post-feed-item" v-for="blog in blogs" :key="blog.id">
          <div><img src="http://placebeard.it/100/100" /></div>
          <div class="post-feed-item__info">
            <div class="post-info-meta--inline">{{ blog.name }}</div>
            <!-- <div v-html="blog.description?.substring(0, 300) + (blog.description?.length > 300 ? '...' : '')"
              class="post-info-title--inline"></div> -->
            <div class="post-info-content--inline">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            <div class="d-flex justify-content-end post-info-footer--inline">
              <router-link :to="{ name: 'blogDetail', params: { id: blog.id } }">
                Go to blog
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
      blogs: null
    }
  },
  methods: {
    ...mapActions('blog', ['getBlogs']),
  },
  mounted() {
    this.getBlogs().then((response) => {
      if (response?.data) {
        this.blogs = response.data;
      }
    });
  }
}

</script>
  <style>
  </style>