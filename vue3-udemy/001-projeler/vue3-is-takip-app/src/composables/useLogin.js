import { ref } from "vue";
import { authRef } from "@/firebase/config";


const hata =ref(null)
const login=async(email,parola)=>{
    hata.value=null;


    try {
        const res=await authRef.signInWithEmailAndPassword(email,parola)
        hata.value=null
        return res
    } catch (error) {
        hata.value='Login İşlemi Gerçekleşmedi'
    }
}

const useLogin=()=>{
    return {hata,login}
}

export default useLogin