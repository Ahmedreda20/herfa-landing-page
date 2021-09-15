<template>
  <div :class="`w-full pt-24 px-10 ${direction ? 'dir-right' : ''}`">
    <h1
      class="text-3xl text-center text-gray-500 mb-8"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {{ $t("features.title") }}
    </h1>
    <p
      class="text-lg text-center text-gray-400 mx-auto max-w-screen-md"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {{ $t("features.content") }}
    </p>

    <a
      href="#"
      class="portal__features"
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      {{ $t("features.button") }}
    </a>

    <img
      src="@/assets/images/Macbook.png"
      alt="app screens images"
      class="
        w-full
        max-h-[500px]
        h-auto
        max-w-screen-xl
        mt-16
        mx-auto
        object-contain
      "
      data-aos="fade-up"
      data-aos-duration="1500"
    />
  </div>
</template>

<script>
export default {
  props: { direction: Boolean },
};
</script>

<style>
.portal__features {
  box-shadow: 0 15px 50px 0 #7d93b250;
  @apply w-auto py-3 px-8 rounded-xl text-white font-semibold my-10 transition-transform duration-300 ease-in-out bg-yellow-300  transform hover:-translate-y-1 mx-auto table;
}
</style>