<template>
    <div>
        <dashboard-title title="Blogs" />
        <div class="pb-2">
            <button class="btn btn-primary" @click="directToCreate">Add Blog</button>
        </div>
        <div class="pt-2">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Create Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog, index) in blogs" :key="blog.Id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ blog.name }}</td>
                        <td>{{ blog.createDate }}</td>
                        <td><button class="btn btn-primary btn-sm">Edit</button> | <button
                                class="btn btn-sm btn-danger">Delete</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DashboardTitle from '@/components/Utils/dashboardTitle';

export default {
    components: { DashboardTitle },
    data() {
        return {
            blogs: []
        }
    },
    methods: {
        directToCreate() {
            this.$router.push({ name: 'user-create-blog' })
        },
        getBlogs() {
            this.$store.dispatch('blog/getBlogs').then((response) => {
                this.blogs = response.data;
                console.log(response, 'dashboard blog');
            })
        }
    },
    beforeMount() {
        this.getBlogs();
    }
}
</script>

<style>
</style>