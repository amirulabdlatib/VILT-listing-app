<template>
    <Container class="w-1/2">
            <div class="mb-8 text-center">
                <Title>
                    Welcome Back
                </Title>
                <p>Don't have an account?
                    <TextLink routeName="register" label="Register" />
                </p>

                <form @submit.prevent="login" class="space-y-6 mt-6">

                    <InputField label="Email" type="email" placeholder="admin@example.com"icon="at" v-model="form.email"/>
                    <small class="text-red-600 dark:text-red-400">{{ form.errors.email }}</small>

                    <InputField label="Password" type="password" icon="key" v-model="form.password"/>
                    <small class="text-red-600 dark:text-red-400">{{ form.errors.password }}</small>


                    <p class="text-slate-500 text-sm dark:text-slate-400">
                        By creating an account, you agree to our Terms of Service and
                        Privacy Policy.
                    </p>

                    <PrimaryButton :disabled="form.processing">Login</PrimaryButton>

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
    import { useForm } from '@inertiajs/vue3';

    const form = useForm({
        'email':null,
        'password':null
    });

    const login =()=>{
        form.post(route('user.login'),)
    }

</script>