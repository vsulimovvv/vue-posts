<template>
  <section class="relative py-20 lg:py-14 md:py-10">
    <div class="container">
      <h1 class="text-5xl mb-14 text-center md:mb-10">Posts</h1>

      <Loader v-if="loading" />

      <!-- Your Post -->
      <div>
        <div v-if="!isNewPost" :newPost="newPost">
          <span
            class="
              font-bold
              text-xl
              mb-4
              xl:text-base
              md:mb-3
              transition
              duration-300
            "
          >
            {{ newPost.title }}
            <!-- лфлв -->
          </span>
          <p class="text-base md:text-sm font-normal transition duration-300">
            {{ newPost.title }}
            <!-- лфвы -->
          </p>
        </div>
      </div>

      <ul
        v-if="!loading"
        class="
          posts-list
          grid grid-cols-3
          gap-8 gap-y-10
          mb-14
          lg:grid-cols-2 lg:gap-7
          sm:grid-cols-1 sm:gap-5
        "
      >
        <li class="h-full" v-for="post in paginatedPosts" :key="post.id">
          <AppPostItem :post="post" />
        </li>
      </ul>

      <div class="pagination flex flex-wrap items-center gap-3">
        <button
          class="
            page
            flex
            items-center
            justify-center
            border
            w-10
            h-10
            transition
            duration-300
            rounded-lg
            hover:text-white hover:bg-sky-900 hover:border-transparent
          "
          v-for="page in pages"
          :key="page"
          :class="{ active: page === pageNumber }"
          @click="changePage(page)"
          type="button"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AppPostItem from "@/components/AppPostItem";
import Loader from "@/components/Loader";

export default {
  name: "Home",

  data() {
    return {
      loading: false,
      isNewPost: false,
      postsPerPage: 6,
      pageNumber: 1,
      newPost: {
        title: "",
        text: "",
      },
    };
  },

  components: {
    AppPostItem,
    Loader,
  },

  computed: {
    ...mapGetters(["posts"]),

    pages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },

    paginatedPosts() {
      let from = (this.pageNumber - 1) * this.postsPerPage;
      let to = from + this.postsPerPage;

      return this.posts.slice(from, to);
    },
  },

  async created() {
    try {
      this.loading = true;
      await this.getPostsFromApi();
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
      return error;
    }
  },

  methods: {
    ...mapActions(["getPostsFromApi"]),

    changePage(page) {
      this.pageNumber = page;
    },
  },
};
</script>

<style  lang="scss">
.page {
  &.active {
    background-color: rgb(12 74 110);
    color: #fff;
  }
}
</style>