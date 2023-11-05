import {ref} from 'vue'
import  {firestoreRef} from '../firebase/config'


const getCollection=(koleksiyon)=>{
    const belgeler=ref(null)
    const hataCollection=ref(null)
//orederby ile sıralama şeklini söylüyoruz .oluşturulma tarihi tarihe göre sıralar desc ise tarihin tersine göre sırala diyor
    let koleksiyonRef=firestoreRef.collection(koleksiyon).orderBy('olusturulmaTarihi','desc')

    koleksiyonRef.onSnapshot(snap=>{
        let sonuclar=[]
        snap.docs.forEach(doc=>{
            doc.data().olusturulmaTarihi && sonuclar.push(
                {...doc.data(),id:doc.id }
            )
        })
        belgeler.value=sonuclar
        hataCollection.value=null
    }),err=>{
        console.log(err.message)
        belgeler.value=null
        hataCollection.value='verilere erişilemedi'
    }
    return {belgeler,hataCollection}
}
export default getCollection