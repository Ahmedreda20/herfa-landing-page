<template>
  <footer
    :class="`w-full h-auto bg-white p-6 ${footer.rtl ? 'dir-right' : ''}`"
  >
    <div class="footer__container py-10">
      <!-- header logo -->
      <div
        class="mr-4 flex-1 flex items-center justify-start md:flex-row flex-col"
      >
        <img
          src="../assets/images/logo.png"
          alt="logo image"
          class="w-[70px] md:w-[100px] h-[70px] md:h-[100px] mr-4"
          data-aos="fade-right"
          data-aos-duration="1250"
        />
        <!-- navBar -->
        <nav class="md:m-0 mt-10">
          <ul
            class="
              list-none
              flex
              items-center
              justify-center
              flex-wrap flex-row
            "
          >
            <li
              class="mx-6 my-3"
              v-for="(page, index) in footer.pages"
              :key="index"
            >
              <router-link
                to="/"
                class="text-base p-2 font-light"
                active-class="text-gray-700"
                data-aos="fade-down"
                :data-aos-delay="50 * index * 2"
                data-aos-duration="1250"
                >{{ page }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
      <!-- right side component  -->
      <nav class="lg:m-0 mt-12" data-aos="fade-left" data-aos-duration="1250">
        <ul
          class="list-none flex items-center justify-center flex-wrap flex-row"
        >
          <li class="m-2">
            <router-link
              to="/"
              class="
                w-12
                h-12
                rounded-full
                bg-yellow-400
                text-white
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <i class="fab fa-facebook"></i>
            </router-link>
          </li>
          <li class="m-2">
            <router-link
              to="/"
              class="
                w-12
                h-12
                rounded-full
                bg-yellow-400
                text-white
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <i class="fab fa-twitter"></i>
            </router-link>
          </li>
          <li class="m-2">
            <router-link
              to="/"
              class="
                w-12
                h-12
                rounded-full
                bg-yellow-400
                text-white
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <i class="fab fa-linkedin"></i>
            </router-link>
          </li>
          <li class="m-2">
            <router-link
              to="/"
              class="
                w-12
                h-12
                rounded-full
                bg-yellow-400
                text-white
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <i class="fab fa-instagram"></i>
            </router-link>
          </li>
          <li class="m-2">
            <router-link
              to="/"
              class="
                w-12
                h-12
                rounded-full
                bg-yellow-400
                text-white
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <i class="fab fa-whatsapp"></i>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="
        w-auto
        flex
        items-center
        justify-cenyer
        flex-row flex-nowrap
        border-t border-gray-300
        py-6
      "
    >
      <div
        class="
          w-full
          xl:container
          mx-auto
          flex
          items-center
          justify-center
          sm:justify-between
          flex-wrap
        "
        data-aos="fade-down"
        data-aos-duration="1250"
      >
        <h3 class="text-base relative">© {{ footer.right }}</h3>
        <img
          src="../assets/images/logo.png"
          alt="logo image"
          class="w-[70px] h-[70px] m-4"
          data-aos="fade-left"
          data-aos-duration="1250"
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footer: {},
  },
  name: "Footer",
};
</script>

<style>
.footer__container {
  @apply xl:container mx-auto flex items-center justify-center  flex-col lg:flex-row flex-wrap;
}
</style>
