import {ref} from 'vue'
import  {firestoreRef} from '../firebase/config'

const useCollection=(koleksiyon)=>{
    const hataCollection=ref(null)

    const belgeEkle=async(belge)=>{
        hataCollection.value=null
        try {
            const res= await firestoreRef.collection(koleksiyon).add(belge)
            return res

        } catch (error) {
            hataCollection.value='belge eklenemedi'

        }
    }
return {hataCollection,belgeEkle}
}
export default useCollection