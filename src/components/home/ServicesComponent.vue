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
      class="text-4xl text-center font-light mx-auto mb-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      The The only app you’ll need to find and sell Hand made products
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
        title="Child Fashion"
        icon="Child_Clothes_Icon.png"
        delay="50"
      />
      <SingleService
        title="Food & Drinks"
        icon="Food and drink.png"
        delay="100"
      />
      <SingleService
        title="Kitchen Tools"
        icon="Kitchen tools_2.png"
        delay="150"
      />
      <SingleService title="Furniture" icon="Furniture_3.png" delay="200" />
      <SingleService title="Hobby" icon="Guitar.png" delay="250" />
      <SingleService
        title="Child Fashion"
        icon="Child_Clothes_Icon.png"
        delay="300"
      />
    </div>
  </div>
</template>

<script>
import SingleService from "./SingleService.vue";

export default {
  components: {
    SingleService,
  },
};
</script>

<style>
</style>