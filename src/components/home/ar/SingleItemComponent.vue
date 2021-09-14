<template>
  <div class="Single__Item--box">
    <div class="content__box" :data-aos="boxAnimate" data-aos-duration="1500">
      <img
        :src="require('@/assets/images/' + icon)"
        alt="search icon image"
        class="block w-16 h-16 mb-6"
        :data-aos="iconAnimate"
        data-aos-duration="1500"
      />
      <h2
        class="text-2xl text-gray-500 mb-10"
        :data-aos="titleAnimate"
        data-aos-duration="1500"
      >
        {{ title }}
      </h2>
      <p
        class="text-base text-gray-400 max-w-screen-sm"
        :data-aos="contentAnimate"
        data-aos-duration="1500"
      >
        {{ content }}
      </p>
    </div>
    <div class="w-auto">
      <img
        :src="require('@/assets/images/' + img)"
        alt="how image"
        :data-aos="imgAnimate"
        data-aos-duration="1500"
        class="w-full max-w-screen-sm h-auto object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    icon: String,
    img: String,
    imgAnimate: String,
    boxAnimate: String,
    contentAnimate: String,
    titleAnimate: String,
    iconAnimate: String,
  },
};
</script>

<style>
.Single__Item--box {
  @apply flex
      items-center
      justify-center
      flex-col
      lg:flex-row
      flex-nowrap
      mt-20
      even:lg:flex-row-reverse
      even:flex-col-reverse;
}

.content__box {
  @apply lg:mb-0 mb-16;
}
.Single__Item--box:nth-child(odd) .content__box {
  @apply lg:ml-10;
}
.Single__Item--box:nth-child(even) .content__box {
  @apply lg:mr-10;
}
</style> 