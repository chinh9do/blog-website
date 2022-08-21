<template>
    <div>
        <dashboard-title :title="'Create post'" />

        <div class="">
            <Form @submit="onSubmit" :validation-schema="blog">
                <div class="form-group">
                    <Field name="blogId" v-slot="{ field, errors }" value="Select a Blog">
                        <select class="form-select" v-bind="field" :class="{ 'is-invalid': errors.length !== 0 }">
                            <option value="Select a Blog" selected>Select a Blog</option>
                            <option v-for="blog in userBlogs" :key="blog.Id" :value="blog.id">
                                {{ blog.name }}
                            </option>
                        </select>
                        <div class="input_alert" v-if="errors.length !== 0">
                            {{ errors[0] }}
                        </div>
                    </Field>

                    <Field name="postTitle" value="Giật tít câu view" v-slot="{ field, errors }">
                        <textarea type="text" class="form-control" id="postTitle" placeholder="Post title"
                            v-bind="field" :class="{ 'is-invalid': errors.length !== 0 }"></textarea>
                        <div class="input_alert" v-if="errors.length !== 0">
                            {{ errors[0] }}
                        </div>
                    </Field>

                    <Field name="postContent" value="<p>post content</p>" v-slot="{ field, errors }">
                        <textarea type="text" class="form-control" id="postContent" placeholder="Post Content"
                            v-bind="field" :class="{ 'is-invalid': errors.length !== 0 }"></textarea>
                        <div class="input_alert" v-if="errors.length !== 0">
                            {{ errors[0] }}
                        </div>
                    </Field>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Save</button>
            </Form>
        </div>
    </div>
</template>

<script>
import { Field, Form } from 'vee-validate'
import DashboardTitle from '@/components/Utils/dashboardTitle';
import * as yup from 'yup'

export default {
    components: { DashboardTitle, Field, Form },
    data() {
        return {
            post: {
                name: yup.string().required('Blog Name is required'),
                userId: yup.string()
            },
            userBlogs: null
        }
    },
    methods: {
        onSubmit(values, { resetForm }) {
            this.$store.dispatch('post/createPost', values)
            resetForm();
            this.$router.push({ name: 'user-posts' })
        },
        async getUserBlogs() {
            const response = await this.$store.dispatch('blog/getBlogByUserId', values);
            this.userBlogs = response;

        }, 
        mounted() {
            this.getUserBlogs();
        },
    }
}
DashboardTitle
</script>

<style>
</style>