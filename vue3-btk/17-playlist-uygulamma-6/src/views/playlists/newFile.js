import useDocument from "@/composables/useDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import { computed } from "vue";

export default (await import("vue")).defineComponent({
  props: ["id"],
  setup(props) {
    const { error, document: playlist } = getDocument("playlists", props.id);
    const { user } = getUser();
    const { deleteDoc, playlist } = useDocument("playlists", props.id);

    const ownership = computed(() => {
      return (
        playlist.value && user.value && user.value.uid === playlist.value.userId
      );
    });

    handleDelete = async () => {
      await deleteDoc();
    };
    return { error, playlist, ownership, handleDelete };
  },
});
