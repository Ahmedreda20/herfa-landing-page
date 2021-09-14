<template>
  <div
    class="single__item"
    data-aos="fade-down"
    :data-aos-delay="delay"
    data-aos-duration="1250"
  >
    <img
      :src="require('@/assets/images/' + icon)"
      alt="service img"
      class="w-24 h-28 mb-6 object-contain"
    />
    <h3 class="text-lg text-light text-center text-gray-400 transition-all">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    delay: String,
  },
  name: "SingleService",
};
</script>

<style>
.single__item {
  box-shadow: 0 10px 15px #7d93b240;
  @apply w-full h-full bg-white rounded-lg flex items-center justify-center flex-col py-10 px-4 transition-all cursor-pointer;
}
.single__item:hover {
  box-shadow: 0 10px 50px #7d93b220;
}
.single__item:hover h3 {
  @apply text-yellow-400;
}
</style>