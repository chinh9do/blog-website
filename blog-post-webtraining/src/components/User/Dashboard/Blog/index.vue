<template>
    <div>
        <dashboard-title title="Blogs" />
        <base-button :btnName="'Add Blog'" :type="'blog'" :action="'create'"/>
        <Loader v-if="loading" />
        <div v-else class="pt-2">
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
                    <tr v-for="(blog, index) in blogs" :key="blog.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ blog.name }}</td>
                        <td>{{ blog.createDate }}</td>
                        <td><button v-if="haveUpdatePermission" @click="directToUpdate(blog.id)" class="btn btn-primary btn-sm">Edit</button> |
                            <button v-if="haveDeletePermission" @click="deleteBlog(blog.id)" class="btn btn-sm btn-danger">Delete</button>
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
import BaseButton from '@/components/Utils/buttonPermission';
import Permissions from "@/shared/constant";
import TokenService from "@/services/token.service";

export default {
    components: { DashboardTitle, Loader, BaseButton },
    data() {
        return {
            loading: true,
            blogs: []
        }
    },
    computed: {
    haveUpdatePermission() {
      return TokenService.getTokenInfo()[Permissions.UPDATE_BLOG] !== undefined;
    },
    haveDeletePermission() {
      return TokenService.getTokenInfo()[Permissions.DELETE_BLOG] !== undefined;
    },
  },
    methods: {
        directToUpdate(blogId) {
            this.$router.push({ name: 'user-update-blog', params: { id: blogId } })
        },
        getBlogs() {
            this.loading = true;
            this.$store.dispatch('blog/getBlogs').then((response) => {
                this.blogs = response.data;
                this.loading = false;
            })
        },
        deleteBlog(blogId) {
            this.$store.dispatch('blog/removeBlogById', blogId).then(() => {
                this.getBlogs();
            })
        }
    },
    mounted() {
        this.getBlogs();
    }
}
</script>

<style>
</style>