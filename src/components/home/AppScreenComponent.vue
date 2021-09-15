<template>
  <div
    :class="`w-full bg-gray-200/5 pt-24 px-10 ${direction ? 'dir-right' : ''}`"
  >
    <h1
      class="text-3xl text-center text-gray-500 mb-8"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {{ $t("screens.title") }}
    </h1>
    <p
      class="text-lg text-center text-gray-400 mx-auto max-w-screen-md"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {{ $t("screens.content") }}
    </p>
    <div
      class="
        flex
        items-center
        justify-center
        flex-col
        sm:flex-row
        my-10
        mx-auto
      "
    >
      <a
        href="#"
        class="
          w-auto
          mr-2
          h-full
          py-3
          px-8
          bg-yellow-400
          rounded-xl
          flex
          items-center
          justify-center
          flex-row
          sm:my-0
          m-2
          shadow
        "
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/App_Store_logo.png"
          alt="apple logo"
          class="w-40 h-10"
        />
      </a>
      <a
        href="#"
        class="
          w-auto
          mx-2
          h-full
          py-3
          px-8
          rounded-xl
          flex
          items-center
          justify-center
          flex-row
          bg-green-700
          sm:my-0
          m-2
          shadow
        "
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/Google_play_logo.png"
          alt="apple logo"
          class="w-40 h-10"
        />
      </a>
    </div>
    <img
      src="@/assets/images/7.png"
      alt="app screens images"
      data-aos="fade-up"
      data-aos-duration="1000"
      class="
        w-full
        max-h-[500px]
        h-auto
        max-w-screen-xl
        mt-16
        mx-auto
        object-contain
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    direction: Boolean,
  },
};
</script>

<style>
</style>