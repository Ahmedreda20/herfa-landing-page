<template>
  <div class="w-full xl:container mx-auto p-6 my-10 pb-20 mb-20">
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
      How to use
    </h1>
    <p
      class="text-lg text-center text-gray-400 mx-auto max-w-screen-md"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      Meet Sigma. The simple, intuitive and powerful app to manage your work.
      Explore app of the next generation for free and become a part of community
      of like-minded members.
    </p>
    <SingleItemComponent
      title="Shop by category"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat eros ac finibus congue. Integer consectetur, lorem nec accumsan commodo, sem mauris pharetra arcu, id viverra eros ipsum ac lorem. Suspendisse potenti."
      icon="Icon awesome-search.png"
      img="shop.png"
      imgAnimate="fade-up-right"
      boxAnimate="fade-down-left"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />

    <SingleItemComponent
      title="Add your choice to cart"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat eros ac finibus congue. Integer consectetur, lorem nec accumsan commodo, sem mauris pharetra arcu, id viverra eros ipsum ac lorem. Suspendisse potenti."
      icon="Shopping Cart_2.png"
      img="cart.png"
      imgAnimate="fade-up-left"
      boxAnimate="fade-down-right"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />

    <SingleItemComponent
      title="Add your store and start sell your products"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat eros ac finibus congue. Integer consectetur, lorem nec accumsan commodo, sem mauris pharetra arcu, id viverra eros ipsum ac lorem. Suspendisse potenti."
      icon="Icon metro-shop.png"
      img="mange.png"
      imgAnimate="fade-up-right"
      boxAnimate="fade-down-left"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />

    <SingleItemComponent
      title="Manage your store and start sell with us"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat eros ac finibus congue. Integer consectetur, lorem nec accumsan commodo, sem mauris pharetra arcu, id viverra eros ipsum ac lorem. Suspendisse potenti."
      icon="Icon ionic-ios-settings.png"
      img="mask.png"
      imgAnimate="fade-up-left"
      boxAnimate="fade-down-right"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />
  </div>
</template>

<script>
import SingleItemComponent from "@/components/home/SingleItemComponent.vue";
export default {
  components: {
    SingleItemComponent,
  },
  name: "HowToComponent",
};
</script>

<style>
</style>