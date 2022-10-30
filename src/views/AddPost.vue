<template>
  <section class="add-post py-20 lg:py-14 md:py-10">
    <div class="container">
      <h1 class="text-5xl mb-14 text-center md:mb-10">Add Post</h1>

      <form @submit.prevent="createPost" class="form-add">
        <div class="flex items-center mb-10 lg:flex-col">
          <label class="mr-4 w-full lg:mr-0 lg:mb-4">
            <input
              v-model="newPost.title"
              class="block w-full border py-2 px-4 leading-none rounded-md"
              type="text"
              placeholder="Title..."
            />
          </label>
          <label class="w-full">
            <input
              v-model="newPost.text"
              class="block w-full border py-2 px-4 leading-none rounded-md"
              type="text"
              placeholder="Text..."
            />
          </label>
        </div>
        <button
          class="
            py-3
            px-20
            bg-sky-900
            text-white
            border-transparent border-2
            rounded-xl
            hover:bg-white hover:text-sky-900 hover:border-sky-900
            transition
            duration-300
            active:scale-[0.98]
            block
            mx-auto
          "
          type="submit"
        >
          Add New Post
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AddPost",

  data() {
    return {
      newPost: {
        title: "",
        text: "",
      },
    };
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapMutations(["createPost"]),
    // createPost() {
    //   if (this.newPost.title && this.newPost.text) {
    //     let post = {
    //       title: this.newPost.title,
    //       text: this.newPost.text,
    //       id: Date.now(),
    //     };
    //     this.posts.unshift(post);
    //     alert("Post successfully created!");
    //     this.newPost.title = "";
    //     this.newPost.text = "";
    //     return this.$router.push("/");
    //   } else {
    //     alert("Enter fields!");
    //   }
    // },
  },
};
</script>

<style>
</style>