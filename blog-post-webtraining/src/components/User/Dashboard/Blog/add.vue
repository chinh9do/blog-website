<template>
    <div>
        <dashboard-title :title="'Create blog'" />

        <div class="">
            <Form @submit="onSubmit" :validation-schema="blog">
                <div class="form-group">
                    <Field name="name" value="chinh blog" v-slot="{ field, errors }">
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
</template>

<script>
import { Field, Form } from 'vee-validate'
import DashboardTitle from '@/components/Utils/dashboardTitle';
import * as yup from 'yup'

export default {
    components: { DashboardTitle, Field, Form },
    data() {
        return {
            blog: {
                name: yup.string().required('Blog Name is required'),
                userId: yup.string()
            }
        }
    },
    methods: {
        onSubmit(values, { resetForm }) {
            this.$store.dispatch('blog/addBlog', values)
            resetForm();
            this.$router.push({ name: 'user-blogs' })
        }
    }
}
DashboardTitle
</script>

<style>
</style>