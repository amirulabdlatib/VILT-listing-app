<template>
    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <Title>
                Register a new account
            </Title>
            <p>Already have an acoount?
                <TextLink routeName="home" label="Login" />
            </p>

            <form @submit.prevent="register" class="space-y-6 mt-6">
                <InputField label="Name" type="text" placeholder="John doe"icon="id-badge" v-model="form.name" />
                <small class="text-red-600 dark:text-red-400">{{ form.errors.name }}</small>

                <InputField label="Email" type="email" placeholder="admin@example.com"icon="at" v-model="form.email"/>
                <small class="text-red-600 dark:text-red-400">{{ form.errors.email }}</small>

                <InputField label="Password" type="password" icon="key" v-model="form.password"/>
                <small class="text-red-600 dark:text-red-400">{{ form.errors.password }}</small>

                <InputField label="Confirm Password" type="password" icon="key" v-model="form.password_confirmation"/>

                <p class="text-slate-500 text-sm dark:text-slate-400">
                    By creating an account, you agree to our Terms of Service and
                    Privacy Policy.
                </p>

                <PrimaryButton>Register</PrimaryButton>

            </form>

        </div>
    </Container>
</template>

<script setup>
    import Container from '../../Components/Container.vue';
    import Title from '../../Components/Title.vue';
    import TextLink from '../../Components/TextLink.vue';
    import InputField from '../../Components/InputField.vue';
    import PrimaryButton from '../../Components/PrimaryButton.vue';
    import {
        useForm
    } from '@inertiajs/vue3';

    const form = useForm({
        'name': null,
        'email': null,
        'password': null,
        'password_confirmation': null
    });

    const register = () => {
        form.post(route('user.register'), {
            onError: () => form.reset('password', 'password_confirmation'),
        })
    }
</script>
