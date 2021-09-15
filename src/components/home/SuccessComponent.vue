<template>
  <div
    class="
      xl:container
      mx-auto
      py-10
      p-6
      flex
      items-center
      justify-center
      xl:flex-row
      flex-col
    "
  >
    <h1
      class="
        text-3xl
        sm:text-4xl
        text-gray-500
        font-light
        text-center
        mb-10
        xl:mb-0
      "
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      Our Success Partners
    </h1>
    <div
      class="
        w-full
        xl:w-auto
        xl:flex-1
        flex
        items-center
        xl:justify-evenly
        justify-around
        flex-wrap
      "
    >
      <SinglePartner img="logo-1.png" />
      <SinglePartner img="logo-2.png" />
      <SinglePartner img="logo-3.png" />
      <SinglePartner img="logo-4.png" />
      <SinglePartner img="logo-5.png" />
      <SinglePartner img="logo-6.png" />
    </div>
  </div>
</template>

<script>
import SinglePartner from "./SinglePartner";
export default {
  components: {
    SinglePartner,
  },
  name: "SuccessComponent",
};
</script>

<style>
</style>