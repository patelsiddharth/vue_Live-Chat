import { ref } from "vue"
import { fireStore } from "../firebase/Config"

const useCollection = (collection) => {
    const error = ref(null);

    const AddDocument = async (doc) => {
        error.value = null;
        try
        {
            await fireStore.collection(collection).add(doc)
        }
        catch(e)
        {
            console.log(e.message);
            error.value = 'Could not send message'
        }
    }
    return { error, AddDocument }
}

export default useCollection;