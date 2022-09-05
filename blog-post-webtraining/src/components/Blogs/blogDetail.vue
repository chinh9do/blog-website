<template>
    <div v-if="blog" class="container p_top post_page">
        <!-- <div class="post_tag">
            Title .......
        </div> -->
        <div class="post_banner" :style="{ backgroundImage: `url(http://placebeard.it/1080/720)` }">

        </div>
        <div class="post_content">
            <div class="owner">
                Welcome to blog's <b> Chinh Do</b>
            </div>
            <hr />
            <h1> {{ blog.name }}</h1>
            <p>About me</p>
            <div class="editor"> Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
        <hr />
        <div class="post-feed row">
            <div class="col-md-9">
                <div class="post-feed-header pl-2">All my posts</div>
                <div v-if="!blog.posts" class="pl-2">
                    No posts
                </div>
                <div v-else class="post-feed-item" v-for="post in blog.posts" :key="post.id">
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
            blog: null
        }
    },
    methods: {
        ...mapActions('blog', ['getBlogById'])
    },
    mounted() {
        this.getBlogById({ id: this.$route.params.id, isIncludePosts: true })
            .then((response) => {
                if (response.data) {
                    this.blog = response.data;
                } else {
                    this.$router.push({ name: '404' });
                }
            })
    }
}
</script>
<style>
</style>