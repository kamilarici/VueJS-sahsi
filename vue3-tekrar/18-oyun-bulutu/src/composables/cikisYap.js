import { ref } from "vue";
import {  auth } from "@/firebase/config"; // Firebase Authentication'ı temsil ettiğini varsaydım, gerekirse ismi değiştirin

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await auth.signOut(); // authRef yerine auth kullanıldı
    error.value = null;
  } catch (err) { // Hata değişkenini farklı bir isimle yakalama
    console.log(err.message);
    error.value = 'Çıkış yapılamadı'; // Türkçe karakter kullanımına dikkat
  }
}

const cikisYap = () => {
  return { error, logout };
}

export default cikisYap;


burada düzenleme yapılacak çıkarken sorun yaşıyoruz