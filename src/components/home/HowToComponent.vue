<template>
  <div
    :class="`w-full xl:container mx-auto p-6 my-10 pb-20 mb-20 ${
      direction ? 'dir-right' : ''
    }`"
  >
    <h1
      class="
        text-3xl
        sm:text-4xl
        text-center
        max-w-screen-sm
        text-gray-500
        font-light
        mx-auto
        mb-14
      "
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {{ $t("how.title") }}
    </h1>

    <SingleItemComponent
      :title="$t('how.items.item_0.title')"
      :content="$t('how.items.item_0.content')"
      icon="Icon awesome-search.png"
      img="shop.png"
      imgAnimate="fade-up-right"
      boxAnimate="fade-down-left"
    />

    <SingleItemComponent
      :title="$t('how.items.item_1.title')"
      :content="$t('how.items.item_1.content')"
      icon="Shopping Cart_2.png"
      img="cart.png"
      imgAnimate="fade-up-left"
      boxAnimate="fade-down-right"
    />

    <SingleItemComponent
      :title="$t('how.items.item_2.title')"
      :content="$t('how.items.item_2.content')"
      icon="Icon metro-shop.png"
      img="mange.png"
      imgAnimate="fade-up-right"
      boxAnimate="fade-down-left"
    />

    <SingleItemComponent
      :title="$t('how.items.item_3.title')"
      :content="$t('how.items.item_3.content')"
      icon="Icon ionic-ios-settings.png"
      img="mask.png"
      imgAnimate="fade-up-left"
      boxAnimate="fade-down-right"
    />
  </div>
</template>

<script>
import SingleItemComponent from "@/components/home/SingleItemComponent.vue";
export default {
  props: {
    direction: Boolean,
  },
  components: {
    SingleItemComponent,
  },
  name: "HowToComponent",
};
</script>

<style>
</style>