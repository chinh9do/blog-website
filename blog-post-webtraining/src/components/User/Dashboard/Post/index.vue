<template>
    <div>
        <dashboard-title title="Posts" />

        <div class="pb-2">
            <button class="btn btn-primary" @click="directToCreate">Add Posts</button>
        </div>
        <div class="w-100"></div>
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
                        <td><button @click="directToUpdate(post.id)" class="btn btn-primary btn-sm">Edit</button> |
                            <button @click="deletePost({ blogId: post.blogId, postId: post.id })"
                                class="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DashboardTitle from '@/components/Utils/dashboardTitle';
import Loader from '@/components/Utils/loader';

export default {
    components: { DashboardTitle, Loader },
    data() {
        return {
            posts: [],
            loading: true
        }
    },
    computed: {
        // formatDateTime(dateStr) {
        //     return dateStr.
        // }
    },
    methods: {
        directToCreate() {
            this.$router.push({ name: 'user-create-post' })
        },
        directToUpdate(postId) {
            this.$router.push({ name: 'user-update-post', params: { id: postId } })
        },
        getPosts() {
            this.loading = true;
            this.$store.dispatch('post/getPosts').then((response) => {
                if (response?.data) {
                    this.loading = false;
                    this.posts = response.data;
                }
            })
        },
        deletePost(payload) {
            this.$store.dispatch('post/removePostById', payload).then(() => {
                this.getPosts();
            })
        }
    },
    mounted() {
        this.getPosts();
    }
}
</script>

<style>
</style>