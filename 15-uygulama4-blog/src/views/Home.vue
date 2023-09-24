<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"> </FilterNav>
    <div v-if="post.length">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"> </SinglePost>
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost.vue";

export default {
  name: "Home",
  components: {
    SinglePost,
  },

  data() {
    return {
      posts: [],
    };
  },
};
</script>
