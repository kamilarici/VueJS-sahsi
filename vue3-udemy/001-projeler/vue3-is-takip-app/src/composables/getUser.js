import { ref } from "vue";
import { authRef } from "@/firebase/config";

const kullanici = ref(authRef.currentUser);

authRef.onAuthStateChanged((k) => {
  kullanici.value = k;
//   console.log(k)
});

const getUser = () => {
  return { kullanici };
};

export default getUser;
