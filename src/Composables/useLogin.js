import { ref } from "vue"
import { auth } from "../firebase/Config"

const error = ref(null);

const login = async (email, password) => {
    error.value = null;
    try
    {
        const res = await auth.signInWithEmailAndPassword(email, password);
        if(!res)
        {
            throw new Error('Incorrect login credentials');
        }
        error.value = null;
        return res;
    }
    catch(e)
    {
        console.log(e);
        error.value = e.message;
    }
}

const useLogin = () => {
    return {error, login}
}

export default useLogin;