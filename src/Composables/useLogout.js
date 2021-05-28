import { ref } from "vue"
import { auth } from "../firebase/Config"

const error = ref(null);

const logout = async () => {
    error.value = null;
    try
    {
        await auth.signOut();
    }
    catch(e)
    {
        console.log(e);
        error.value = e.message;
    }
}

const useLogout = () => {
    return { error, logout }
}

export default useLogout;