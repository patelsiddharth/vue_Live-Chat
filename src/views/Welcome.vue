<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">  
            <LogIn @LoginEvent="EnterChat"/>
            <p>No account yet ? <span @click="showLogin = false">SignUp</span> instead</p>
        </div>
        <div v-else>
            <SignUp @SignUpEvent="EnterChat"/>
            <p>Already registered. <span @click="showLogin = true">Login</span> here</p>
        </div>
    </div>
</template>

<script>
import SignUp from '../components/Signup';
import LogIn from '../components/Login';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components : {SignUp, LogIn},
    setup()
    {
        const showLogin = ref(true);
        const router = useRouter();
        const EnterChat = () => {
            router.push({name : 'Chatroom'})
        }

        return{
            showLogin, EnterChat
        }
    }
}
</script>

<style>
.welcome
{
    text-align: center;
    padding: 20px 0;
}
.welcome form
{
    width: 300px;
    margin: 20px auto;
}
.welcome label
{
    display: block;
    margin: 20px 0 10px;
}
.welcome input
{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span
{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button
{
    margin: 20px auto;
}
</style>