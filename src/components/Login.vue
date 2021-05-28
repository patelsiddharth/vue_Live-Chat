<template>
    <form @submit.prevent="HandleSubmit">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">
            {{error}}
        </div>
        <button>Log In</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../Composables/useLogin';

export default {
    setup(props, context)
    {
        const {error, login} = useLogin();
        const email = ref('');
        const password = ref('');

        const HandleSubmit = async () => {
            await login(email.value, password.value);
            if(!error.value)
            {
                console.log('User Logged In...');
                context.emit('LoginEvent');
            }
        }

        return {
            email, password, HandleSubmit, error
        }
    }
}
</script>

<style>

</style>