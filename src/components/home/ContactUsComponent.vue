<template>
  <div
    class="
      w-full
      pb-20
      pt-6
      xl:container
      mx-auto
      flex
      items-center
      justify-center
      flex-col
      xl:flex-row
    "
  >
    <img
      class="w-full sm:max-w-screen-sm p-10 object-contain"
      src="@/assets/images/contact.png"
      data-aos="fade-up-left"
      data-aos-duration="1500"
    />
    <div class="xl:w-1/3 w-full max-w-screen-sm xl:ml-20 mt-20 xl:mt-0 p-8">
      <h1
        class="text-4xl mb-10 text-gray-500"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Contact us
      </h1>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/home/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style>
</style>