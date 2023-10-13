import { ref } from "vue";
import { authRef } from "@/firebase/config";


const error=ref(null)
const login=async()=>{
    error.value=null


    try {
       const res=await authRef.signInAnonymously() 
       error.value=null
    } catch(error){
        
    }
}