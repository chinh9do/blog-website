<template>
    <div>
        <dashboard-title :title="'Create blog'" />
        <div class="">
            <Form @submit="onSubmit" :validation-schema="blogSchema">
                <div class="form-group">
                    <Field name="blogName" :value="blog.blogName" v-slot="{ field, errors }">
                        <input type="text" class="form-control" id="blogName" placeholder="Blog Name" v-bind="field"
                            :class="{ 'is-invalid': errors.length !== 0 }" />
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
            blog: { blogName: '' },
            blogSchema: {
                blogName: yup.string().required('Blog Name is required'), //.matches('/^\S*$/',`Don't allow have space`),
                userId: yup.string()
            }
        }
    },
    methods: {
        onSubmit(values) {
            this.$store.dispatch('blog/updateBlog', { values })
        },
        getBlog(id) {
            this.$store.dispatch('blog/getBlogById', id)
                .then((blog) => {
                    if (blog) {
                        console.log('ok');
                        this.blog = blog;
                    } else {
                        console.log('no ok');
                        this.$router.push({ name: '404' })
                    }
                })
        }
    },
    beforeRouteUpdate(to) {
        this.getBlog(to.params.id);
    },
    mounted() {
        this.getBlog(this.$route.params.id);
    }
}
DashboardTitle
</script>

<style>
</style>