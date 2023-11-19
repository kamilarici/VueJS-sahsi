import {ref} from 'vue'
import  {firestoreRef} from '../firebase/config'


const getDocument=(koleksiyon,id)=>{
    let belge=ref(null)
    let hataDocument=ref(null)
    let belgeRef=firestoreRef.collection(koleksiyon).doc(id)


    belgeRef.onSnapshot(doc=>{
        // console.log(doc.data())
        if(doc.data()){
            belge.value={...doc.data(),id:doc.id}
            hataDocument.value=null
        }else{
            hataDocument.value='belge bulunamadı'
        }
    },err=>{
        hataDocument.value='veriye erişilemedi'
    })
    return {hataDocument,belge}

}
export default getDocument