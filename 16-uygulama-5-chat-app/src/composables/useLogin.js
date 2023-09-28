import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    console.log(res);
    return res;
  } catch (error) {
    console.log(err.value);
    err.value = "Incorrect login credentials";
  }
};
