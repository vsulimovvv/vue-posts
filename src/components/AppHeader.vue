<template>
  <header class="fixed w-full top-0 z-10 bg-sky-900 text-white">
    <div class="container">
      <nav>
        <ul class="flex gap-10 text-xl py-4 md:text-base md:gap-3">
          <li>
            <router-link
              class="
                block
                p-1
                font-medium
                hover:text-slate-300
                transition
                duration-200
              "
              to="/"
            >
              Home
            </router-link>
          </li>

          <li class="ml-auto">
            <router-link
              class="
                block
                font-medium
                p-1
                hover:text-slate-300
                transition
                duration-200
              "
              :to="{ name: 'Posts' }"
            >
              All Posts
            </router-link>
          </li>
          <li>
            <router-link
              class="
                block
                font-medium
                p-1
                hover:text-slate-300
                transition
                duration-200
              "
              :to="{ name: 'Add' }"
            >
              Add New Posts
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
a {
  &.router-link-exact-active {
    color: #56f0ab;
  }
}
</style>