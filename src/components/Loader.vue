<template>
  <div class="loader z-[3]">
    <img src="@/assets/loader.gif" alt="loader" />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
.loader {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>