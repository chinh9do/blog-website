<template>
    <div v-if="post" class="container p_top post_page">
        <!-- <div class="post_tag">
            Title .......
        </div> -->
        <div class="post_banner" :style="{ backgroundImage: `url(http://placebeard.it/1080/720)` }">

        </div>
        <div class="post_content">
            <div class="owner">
                Article written by <b> Chinh Do</b>
            </div>
            <hr />
            <h1> {{ post.title }}</h1>
            <div class="editor" v-html="post.shortContent"></div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            post: {}
        }
    },
    methods: {
        ...mapActions('post', ['getPostById'])
    },
    mounted() {
        this.getPostById(this.$route.params.id)
            .then((post) => {
                if (post) {
                    this.post = post;
                } else {
                    this.$router.push({ name: '404' });
                }
            })
    }
}
</script>
<style>
.post_page {
    padding-bottom: 100px;
}

.post_page .post_tag {
    background: var(--grape);
    display: inline-block;
    font-size: 21px;
    padding: 5px 10px;
    color: black;
    font-weight: 100;
}

.post_page .post_banner {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 350px;
}

.post_page .post_content {
    margin-top: 50px;
}

.post_page .post_content .editor {
    font-size: 17px;
}
</style>