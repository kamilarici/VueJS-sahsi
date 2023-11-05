import { ref } from "vue";
import { storageRef } from "@/firebase/config";

import getUser from "./getUser";

const {kullanici}=getUser()
const useStorage=()=>{
    const hata=ref(null)
    const url=ref(null)
    const fileYol=ref(null)


    const resimYukle=async(file)=>{
        fileYol.value=`isler/${kullanici.value.uid}/${file.name}`
        const storage=storageRef.ref(fileYol.value)

        try {
            const res=await storage.put(file)
            url.value=await res.ref.getDownloadURL()
        } catch (error) {
            hata.value=err;
            
        }
    }
    return {resimYukle,url,fileYol,hata}

}
export default  useStorage