import { ref } from "vue";
import { auth } from "../firebase/Config";

const error = ref(null);

const signUp = async (email, password, displayName) => {
    error.value = null;
    try
    {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        if(!res)
        {
            throw new Error('Could not complete sign up process');
        }

        await res.user.updateProfile({displayName});
        error.value = null;
        return res;
    }
    catch(e)
    {
        console.log(e);
        error.value = e.message;
    }
}

const useSignUp = () => {
    return {
        signUp, error
    }
}

export default useSignUp;