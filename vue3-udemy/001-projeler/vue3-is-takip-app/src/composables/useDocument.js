import {ref} from 'vue'
import  {firestoreRef} from '../firebase/config'

const useDocument=(koleksiyon,id)=>{
    const hata=ref(null)

    let belgeRef=firestoreRef.collection(koleksiyon).doc(id)

    const belgeSil=async()=>{
        hata.value=null

        try {
            const res=await belgeRef.delete()
            return res
        } catch (error) {
            hata.value='belge Silinemedi'
            
        }

    }
return {hata,belgeSil}

}

export default useDocument