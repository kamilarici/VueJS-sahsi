import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";


const belgeIslem=(collection)=>{
    const hata=ref(null)
    const ekle=async(doc)=>{
        hata.value=null
        try {
            const res=await firestoreRef.collection(collection).add(doc)
            return res
        } catch (error) {
            hata.value='belge eklenemedi'
        }
    }

    const sil=async(id)=>{
        hata.value=null
        try {
            const res=await firestoreRef.collection(collection).doc(id).delete()
            return res
        } catch (error) {
            hata.value='belge silinemedi'
        }
    }
    return {hata,ekle,sil}
}

export default belgeIslem;