<template>
  <router-link
    class="
      h-full
      posts-item
      flex flex-col
      p-5
      hover:bg-sky-900
      transition
      duration-300
      rounded-lg
    "
    :to="/posts/ + post.id"
  >
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
      {{ post.title }}
    </span>
    <p class="text-base md:text-sm font-normal transition duration-300">
      {{ post.body }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "AppPostItem",
  props: {
    post: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" >
.posts-item {
  &:hover {
    * {
      color: #fff;
    }
  }
}
</style>