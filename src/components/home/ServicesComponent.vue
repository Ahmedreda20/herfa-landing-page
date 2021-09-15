<template>
  <div
    :class="`w-full
      xl:container
      mx-auto
      p-6
      my-10
      border-b border-gray-300
      pb-20
      mb-20 ${direction ? 'dir-right' : ''}`"
  >
    <h1
      class="text-3xl sm:text-4xl text-center font-light mx-auto mb-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {{ $t("products.title") }}
    </h1>
    <div
      class="
        w-full
        mx-auto
        grid
        gap-8
        grid-cols-[repeat(auto-fill,minmax(205px,1fr))]
        justify-center
      "
    >
      <SingleService
        :title="$t('products.all.product_0')"
        icon="فخار.png"
        delay="50"
      />
      <SingleService
        :title="$t('products.all.product_1')"
        icon="خياطه.png"
        delay="100"
      />
      <SingleService
        :title="$t('products.all.product_2')"
        icon="خوص.png"
        delay="150"
      />
      <SingleService
        :title="$t('products.all.product_3')"
        icon="خياطة.png"
        delay="200"
      />
      <SingleService
        :title="$t('products.all.product_4')"
        icon="دمي.png"
        delay="250"
      />
      <SingleService
        :title="$t('products.all.product_5')"
        icon="رسم.png"
        delay="300"
      />
    </div>
  </div>
</template>

<script>
import SingleService from "./SingleService.vue";

export default {
  props: {
    direction: Boolean,
  },
  components: {
    SingleService,
  },
};
</script>

<style>
</style>