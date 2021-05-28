<template>
    <form @submit.prevent="HandleSubmit">
        <input type="text" name="name" placeholder="Display Name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">
            {{error}}
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '../Composables/useSignUp';

export default {
    setup(props, context)
    {
        const {error, signUp} = useSignUp()
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        const HandleSubmit = async () => {
            await signUp(email.value, password.value, displayName.value);
            if(!error.value)
            {
                context.emit('SignUpEvent');
            }
        }

        return {
            displayName, email, password, HandleSubmit, error
        }
    }
}
</script>

<style>
input
{
    padding: 10px;
}
</style>