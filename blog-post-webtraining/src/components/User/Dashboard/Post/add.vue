<template>
    <div>
        <dashboard-title :title="'Create post'" />

        <div class="">
            <Form @submit="onSubmit" :validation-schema="post">
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
                </div>

                <div class="form-group">
                    <Field name="title" value="Giật tít câu view" v-slot="{ field, errors }">
                        <input type="text" class="form-control" id="title" placeholder="Title" v-bind="field"
                            :class="{ 'is-invalid': errors.length !== 0 }" />
                        <div class="input_alert" v-if="errors.length !== 0">
                            {{ errors[0] }}
                        </div>
                    </Field>
                </div>

                <div class="form-group">
                    <Field name="content" value="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>" v-slot="{ field, errors }">
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
                blogId: yup.string().notOneOf(['Select a Blog'], "Blog is required"),
                title: yup.string().required('Title is required'),
                content: yup.string().required('Content is required').min(50)
            },
            userBlogs: null
        }
    },
    methods: {
        onSubmit(values, { resetForm }) {
            console.log(values);
            this.$store.dispatch('post/createPost', values)
            resetForm();
            this.$router.push({ name: 'user-posts' })
        },
        getUserBlogs() {
            this.$store.dispatch('blog/getBlogByUserId').then((response) => {
                if (response.data) {
                    this.userBlogs = response.data;
                }
            });

        },
    },
    mounted() {
        this.getUserBlogs();
    },
}
DashboardTitle
</script>

<style>
</style>