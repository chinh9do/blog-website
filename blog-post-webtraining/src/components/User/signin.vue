<template>
    <div class="container login_form">
        <Form @submit="onSubmit" :validation-schema="formSchema">
            <img src="../../assets/blogs.png" />
            <div class="form-group">
                <Field name="userName" v-slot="{ field, errors, errorMessages }">
                    <input type="text" class="form-control" id="userName" placeholder="User Name" v-bind="field"
                        :class="{ 'is-invalid': errors.length !== 0 }" />
                    <div class="input_alert" v-if="errors.length !== 0">
                        {{ errorMessages }}
                    </div>
                </Field>
            </div>

            <div class="form-group">
                <Field name="password" v-slot="{ field, errors, errorMessages }">
                    <input type="password" class="form-control" id="password" placeholder="Password" v-bind="field"
                        :class="{ 'is-invalid': errors.length !== 0 }" />
                    <div class="input_alert" v-if="errors.length !== 0">
                        {{ errorMessages }}
                    </div>
                </Field>
            </div>

            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
        </Form>

    </div>
</template>
<script>
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'

export default {
    components: {
        Field,
        Form
    },
    data() {
        return {
            formSchema: {
                userName: yup.string().required('The user name is required'),
                password: yup.string().required('The password is required')
            }
        }
    },

    methods: {
        onSubmit(values, { resetForm }) {
            console.log(values, 'SIGN IN')

            resetForm();
        }
    },
}
</script>
<style>
.login_form {
    width: 350px;
    margin-top: 50px;
    padding: 30px;
    border-radius: 3px;
    box-shadow: 5px 10px 15px #888888;
    text-align: center;
    background-color: #E7F4E6;
}

.login_form img {
    padding-bottom: 20px;
}

.input_alert {
    color: red;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
