<template>
  <AppHeader />
  <main class="main mt-16">
    <router-view />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1100px;
  padding: 0 15px;
  margin: 0;
}
</style>
