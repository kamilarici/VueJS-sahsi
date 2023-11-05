import {ref} from 'vue'
import  {firestoreRef} from '../firebase/config'

const useCollection=(koleksiyon)=>{
    const hataCollection=ref(null)

    const belgeEkle=async(belge)=>{
        hataCollection.value=null
        try {
            await firestoreRef.collection(koleksiyon).add(belge)

        } catch (error) {
            hataCollection.value='belge eklenemedi'

        }
    }
return {hataCollection,belgeEkle}
}
export default useCollection