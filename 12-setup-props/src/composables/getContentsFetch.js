import { ref } from "vue";
const getContentsFetch = () => {
  const contents = ref([]);
  const err = ref(null);
  const getContents = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      contents.value = await data.json();
      if (!data.ok) {
        throw new Error("verilere erişilemedi");
      }
    } catch (error) {
      err.value = error.message;
    }
  };
  return { contents, err, getContents };
};
// ? composablesdeki klasörü başka yerlerde kullanmak için kullanmak istediğimiz fonk değişken yada dataları return ile aşağı yollamamız gerekiyor
export default getContentsFetch;
