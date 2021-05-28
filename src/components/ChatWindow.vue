<template>
    <div class="chat-window">
        <div v-if="error">{{error}}</div>
        <div v-if="formattedDoc" class="messages" ref="messages">
            <div v-for="doc in formattedDoc" :key="doc.id" class="single">
                <span class="createdAt">{{doc.createdAt}}</span>
                <span class="name">{{doc.name}}</span>
                <span class="message">{{doc.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import GetCollection from '../Composables/GetCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';

export default {
    setup()
    {
        const {error, documents} = GetCollection('messages');
        const formattedDoc = computed(() => {
            if(documents.value)
            {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {
                        ...doc,
                        createdAt : time
                    }
                })
            }
        })

        const messages = ref(null )

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        })

        return{error, formattedDoc, messages}
    }
}
</script>

<style>
.chat-window
{
    background: #fafafa;
    padding: 30px 20px;
}
.single
{
    margin: 18px 0;
}
.createdAt
{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name
{
    font-weight: bold;
    margin-right: 6px;
}
.messages
{
    max-height: 400px;
    overflow: auto;
}
</style>