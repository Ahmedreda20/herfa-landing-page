<template>
  <div class="w-auto">
    <img
      :src="require(`@/assets/images/${img}`)"
      alt="partner logo"
      class="
        w-auto
        max-w-[110px]
        h-auto
        max-h-[100px]
        object-contain
        align-middle
        m-3
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  },
  name: "SinglePartner",
};
</script>

<style>
</style>