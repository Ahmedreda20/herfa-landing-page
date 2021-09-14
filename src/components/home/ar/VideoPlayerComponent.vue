<template>
  <div
    class="
      w-full
      xl:container
      mx-auto
      p-6
      my-10
      border-b border-gray-300
      pb-20
      mb-20
    "
  >
    <h1
      class="
        text-4xl text-center
        max-w-screen-sm
        text-gray-500
        font-light
        mx-auto
        mb-14
      "
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      استكشف تطبيق الجيل القادم.
      <br />
      شاهد الفيديو.
    </h1>
    <div class="video__box" data-aos="zoom-in" data-aos-duration="1500">
      <button class="play__btn">
        <img
          src="@/assets/images/play.png"
          alt="play icon"
          width="25"
          height="25"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayerComponent",
};
</script>

<style>
.video__box {
  box-shadow: 0 20px 40px -5px #7d93b270;
  @apply w-full
        max-w-screen-xl
        mx-auto
        rounded-lg
        bg-green-700
        md:h-[650px]
        h-96
        relative;
}
.play__btn {
  box-shadow: 0 20px 40px -10px #00000030;
  @apply w-24 h-24 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
</style>