<template>
    <div>
        <dashboard-title :title="'Update post'" />
        <Loader v-if="loading" />
        <div v-else>
            <div v-if="post" class="">
                <Form @submit="onSubmit" :validation-schema="postSchema">
                    <div class="form-group">
                        <Field name="blogId" v-slot="{ field, errors }" v-model="post.blogId">
                            <select class="form-select" v-bind="field" :class="{ 'is-invalid': errors.length !== 0 }">
                                <option value="Select a Blog" selected>Select a Blog</option>
                                <option v-for="item in userBlogs" :key="item.Id" :value="item.id">
                                    {{ item.name }}
                                </option>
                            </select>
                            <div class="input_alert" v-if="errors.length !== 0">
                                {{ errors[0] }}
                            </div>
                        </Field>
                    </div>

                    <div class="form-group">
                        <Field name="title" v-model="post.title" v-slot="{ field, errors }">
                            <input type="text" class="form-control" id="title" placeholder="Title" v-bind="field"
                                :class="{ 'is-invalid': errors.length !== 0 }" />
                            <div class="input_alert" v-if="errors.length !== 0">
                                {{ errors[0] }}
                            </div>
                        </Field>
                    </div>

                    <div class="form-group">
                        <Field name="content" v-model="post.content" v-slot="{ field, errors }">
                            <textarea type="text" class="form-control" id="content" placeholder="Content" v-bind="field"
                                :class="{ 'is-invalid': errors.length !== 0 }"></textarea>
                            <div class="input_alert" v-if="errors.length !== 0">
                                {{ errors[0] }}
                            </div>
                        </Field>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block">Save</button>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import { Field, Form } from 'vee-validate'
import DashboardTitle from '@/components/Utils/dashboardTitle';
import * as yup from 'yup'
import Loader from '@/components/Utils/loader';

export default {
    components: { DashboardTitle, Field, Form, Loader },
    data() {
        return {
            loading: true,
            postSchema: {
                blogId: yup.string().notOneOf(['Select a Blog'], "Blog is required"),
                title: yup.string().required('Title is required'),
                content: yup.string().required('Content is required').min(50)
            },
            post: null,
            userBlogs: null
        }
    },
    methods: {
        onSubmit(values) {
            values.id = this.$route.params.id;
            // values.createDate = moment(new Date()).format('YYYY-MM-DD') 
            // console.log(values.createDate);
            this.$store.dispatch('post/updatePost', values).then(() => {
                this.$router.push({ name: 'user-posts' })
            })
        },
        getUserBlogs() {
            this.$store.dispatch('blog/getBlogByUserId').then((response) => {
                if (response.data) {
                    this.userBlogs = response.data;
                }
            });
        },
        getPost(id) {
            this.loading = true;
            this.$store.dispatch('post/getPostById', id)
                .then((response) => {
                    this.loading = false;
                    if (response.data) {
                        this.post = response.data //JSON.parse(JSON.stringify(response.data))
                    } else {
                        this.$router.push({ name: '404' })
                    }
                })
        }
    },
    mounted() {
        this.getUserBlogs();
        this.getPost(this.$route.params.id);
    },
}
DashboardTitle
</script>

<style>
</style>