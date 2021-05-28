import { ref, watchEffect } from "vue"
import { fireStore } from "../firebase/Config"

const GetCollection = (collection) => {
    const error = ref(null);
    const documents = ref(null);

    const collectionRef = fireStore.collection(collection).orderBy('createdAt')

    const unsubscribe = collectionRef.onSnapshot(snap => {
        let results = [];
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id : doc.id })
        })
        documents.value = results;
        error.value = '';
    }, (err) => {
        console.log(err);
        error.value = err.message;
        documents.value = null;
    })

    watchEffect((onInvalidated) => {
        // unsubscribe from prev collection when watcher is stopped (component unmounted)
        onInvalidated(() => unsubscribe())
    })
    return { error, documents }
}

export default GetCollection;