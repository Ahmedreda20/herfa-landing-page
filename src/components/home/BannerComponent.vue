<template>
  <section class="w-full bg-green-700 py-20 px-8">
    <div
      class="
        xl:container
        mx-auto
        lg:flex
        items-center
        justify-center
        flex-row flex-nowrap
      "
    >
      <div class="lg:w-1/2">
        <div class="lg:max-w-[600px]">
          <h1
            class="
              text-5xl
              sm:text-6xl
              text-white
              font-light
              sm:leading-[80px]
              mb-8
            "
            data-aos="fade-up"
          >
            Great App that makes your life easier
          </h1>
          <p class="text-lg text-white font-medium mb-10" data-aos="fade-down">
            Meet Sigma. The simple, intuitive and powerful app to manage your
            work. Explore app of the next generation for free and become a part
            of community of like-minded members.
          </p>
          <div
            class="
              flex
              items-start
              sm:items-center
              justify-start
              flex-row flex-wrap
            "
            data-aos="fade-left"
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
                bg-gray-600
                sm:my-0
                m-2
                shadow
              "
            >
              <img
                src="@/assets/images/Google_play_logo.png"
                alt="apple logo"
                class="w-40 h-10"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="lg:block hidden lg:w-1/2 p-6" data-aos="fade-right">
        <img
          src="@/assets/images/banner.png"
          alt="banner image"
          class="w-full object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.shadow {
  box-shadow: 0 15px 50px 0 #7d93b250 !important;
  @apply transition-transform duration-200 transform hover:-translate-y-1;
}
</style>