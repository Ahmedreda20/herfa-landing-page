<template>
  <div class="w-full">
    <div class="mb-20 p-4">
      <h1
        class="text-4xl text-center text-gray-500 font-extrabold mb-6"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Download Aqary today
      </h1>
      <p
        class="text-4xl text-center text-gray-400 mx-auto font-light"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        and get started with a free trial for your business
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
    </div>
    <div class="bgImage__container">
      <img
        src="@/assets/images/Vision-2030-01.png"
        alt="rewaya image"
        class="sm:w-auto w-7/12"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bgImage__container {
  background-image: url("~@/assets/images/bottom-bg.png");
  @apply w-full py-24 px-10 flex items-center justify-center bg-cover;
}
</style>