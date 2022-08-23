<template>
    <div>
        <dashboard-title :title="'Create blog'" />
        <Loader v-if="loading" />
        <div v-else>
            <div v-if="blog" class="">
                <Form @submit="onSubmit" :validation-schema="blogSchema">
                    <div class="form-group">
                        <Field name="name" v-model="blog.name" v-slot="{ field, errors }">
                            <input type="text" class="form-control" id="name" placeholder="Blog Name" v-bind="field"
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
    </div>
</template>

<script>
import { Field, Form } from 'vee-validate'
import DashboardTitle from '@/components/Utils/dashboardTitle';
import * as yup from 'yup'
import TokenService from '@/services/token.service';
import Loader from '@/components/Utils/loader';

export default {
    components: { DashboardTitle, Field, Form, Loader },
    data() {
        return {
            loading: true,
            blog: null,
            blogSchema: {
                name: yup.string().required('Blog Name is required'), //.matches('/^\S*$/',`Don't allow have space`),
                userId: yup.string(),
                id: yup.string()
            }
        }
    },
    methods: {
        onSubmit(values) {
            values.userId = TokenService.getUserId();
            values.id = this.$route.params.id;

            this.$store.dispatch('blog/updateBlog', values).then(() => {
                this.$router.push({ name: 'user-blogs' })
            })
        },
        async getBlog(id) {
            this.loading = true;
            // const response = await this.$store.dispatch('blog/getBlogById', id)
            // // console.log(response);
            // this.blog = response;
            this.$store.dispatch('blog/getBlogById', id)
                .then((response) => {
                    this.loading = false;
                    if (response.data) {
                        this.blog = response.data //JSON.parse(JSON.stringify(response.data))
                    } else {
                        this.$router.push({ name: '404' })
                    }
                })
        }
    },
    // beforeRouteUpdate(to) {

    //     this.getBlog(to.params.id);
    // },
    mounted() {
        this.getBlog(this.$route.params.id);
    }
}
</script>

<style>
</style>