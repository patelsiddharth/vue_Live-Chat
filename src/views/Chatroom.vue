<template>
    <div class="container">  
        <Navbar />
        <ChatWindow />
        <NewChatForm/>
    </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar';
import GetUser from '../Composables/GetUser';
import NewChatForm from '../components/NewChatForm';
import ChatWindow from '../components/ChatWindow';

export default {
    components : { Navbar, NewChatForm, ChatWindow },
    setup()
    {
        const router = useRouter();
        const {user} = GetUser();
        watch(user, () => {
            if(!user.value)
            {
                router.push({name : 'Welcome'})
            }
        })
    }
}
</script>

<style>

</style>