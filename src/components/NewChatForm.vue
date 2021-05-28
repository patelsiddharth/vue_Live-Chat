<template>
    <form>
        <textarea 
            placeholder="Type a message and hit enter to send..." 
            @keypress.enter.prevent="HandleSubmit"
            v-model="message">
        </textarea>
        <div class="error">{{error}}</div>
    </form>
</template>

<script>
import { ref } from 'vue'
import GetUser from '../Composables/GetUser';
import useCollection from '../Composables/useCollection';
import { timeStamp } from '../firebase/Config';

export default {
    setup()
    {
        const {error, AddDocument} = useCollection('messages');
        const {user} = GetUser();
        const message = ref('');
        const HandleSubmit = async () => {
            const chat = {
                name : user.value.displayName,
                message : message.value,
                createdAt : timeStamp()
            }
            await AddDocument(chat)
            if(!error.value)
            {
                message.value = '';
            }
        }
        return{
            HandleSubmit, message, error
        }
    }
}
</script>

<style scoped>
form
{
    margin: 10px;
}
textarea
{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>