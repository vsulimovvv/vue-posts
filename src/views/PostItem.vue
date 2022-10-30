<template>
  <div class="post">
    <img
      class="h-[300px] w-full object-cover mb-5"
      src="https://images.unsplash.com/photo-1667077770557-a4ebd886140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80"
      alt="post_img"
    />
    <div class="container">
      <h2 class="font-bold text-2xl mb-5">
        {{ post.title }}
      </h2>
      <p class="text-base">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostItem",
  data() {
    return {
      post: null,
    };
  },

  computed: {
    ...mapGetters(["getId"]),
  },

  created() {
    let id = +this.$route.params.id;
    this.post = this.getId(id);
  },
};
</script>
