<template>
    <nav v-if="user">
        <div>
            <p>Hey there... {{user.displayName}}</p>
            <p class="email">Currently logged in as... {{user.email}}</p>
        </div>
        <button @click="HandleLogout">Logout</button>
    </nav>
</template>

<script>
import useLogout from '../Composables/useLogout';
import GetUser from '../Composables/GetUser';

export default {
    setup(props, context)
    {
        const { user } = GetUser();
        console.log(user);
        const {error, logout} = useLogout();
        const HandleLogout = async () => {
            await logout();
            if(!error.value)
            {
                console.log('User logged out successfully !!!');
            }
        }
        return {
            HandleLogout, user
        }
    }
}
</script>

<style>
nav
{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p
{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email
{
    font-size: 14px;
    color: #999;
}
</style>