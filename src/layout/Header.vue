<template>
  <header
    :class="`w-full h-auto bg-white p-4 sticky top-0 z-10 ${
      header.rtl ? 'dir-right' : ''
    }`"
    ref="header"
  >
    <div class="header__container">
      <!-- header logo -->
      <div class="mr-4">
        <img
          src="../assets/images/logo.png"
          alt="logo image"
          class="w-[70px] md:w-[100px] h-[70px] md:h-[100px]"
        />
      </div>
      <!-- header navBar -->
      <nav class="flex-1 md:block hidden">
        <ul
          class="
            list-none
            flex
            items-center
            justify-center
            flex-nowrap flex-row
          "
        >
          <li class="mx-2" v-for="(page, index) in header.pages" :key="index">
            <router-link
              to="/"
              class="text-base p-2 font-light"
              active-class="text-gray-700"
              >{{ page }}</router-link
            >
          </li>
        </ul>
      </nav>
      <!-- right side component  -->
      <div class="w-auto flex items-center justify-cenyer flex-row flex-nowrap">
        <button class="header__btn md:block hidden" aria-label="open portal">
          {{ header.button }}
        </button>
        <div class="w-auto relative">
          <button
            class="
              w-auto
              p-3
              px-4
              flex
              items-center
              justify-center
              text-gray-400
            "
            @click="handleLanguagesDrop"
          >
            <span>{{ header.locale }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="localLang__dropDown visible__elem" ref="LanDropDown">
            <button
              class="localLang__option"
              type="button"
              aria-label="change lang"
              @click="handleLang('en')"
            >
              En
            </button>
            <button
              class="localLang__option"
              type="button"
              aria-label="change lang"
              @click="handleLang('ar')"
            >
              Ar
            </button>
          </div>
        </div>
        <button class="w-14 h-auto p-4 mx-2 md:hidden block" @click="openNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="open"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-else-if="!open"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <NavBarMd :pages="header.pages" :button="header.button" :active="open" />
  </header>
</template>

<script>
import NavBarMd from "./NavBarMd.vue";
export default {
  props: {
    header: {},
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleLanguagesDrop() {
      const CurrentDrop = this.$refs.LanDropDown;
      CurrentDrop && CurrentDrop.classList.toggle("active");
    },

    handleLang(lang) {
      localStorage.setItem("locale", lang);
      window.location.reload();
      this.$router.push(`${lang === "ar" ? "/ar" : "/"}`);
      console.clear();
    },
    openNav() {
      return this.open ? (this.open = false) : (this.open = true);
    },
  },
  components: {
    NavBarMd,
  },
  name: "Header",
};
</script>

<style>
.header__container {
  @apply xl:container mx-auto flex items-center justify-between flex-row flex-nowrap;
}
.header__btn {
  box-shadow: 0 15px 50px 0 #7d93b250;
  @apply w-auto py-3 px-8 rounded-xl text-white font-semibold  transition-transform duration-300 ease-in-out bg-yellow-300 mr-4 transform hover:-translate-y-1;
}
.localLang__option {
  @apply px-4 py-2 text-gray-700 font-medium cursor-pointer;
}
.localLang__option:not(:last-child) {
  @apply border-b border-gray-200;
}
.localLang__dropDown {
  @apply w-auto absolute top-[calc(100%+10px)]  bg-white rounded-xl p-2;
}
.visible__elem {
  @apply transition-all duration-200 invisible pointer-events-none transform -translate-y-3 opacity-0;
}
.active {
  @apply visible pointer-events-auto translate-y-0 opacity-100;
}
</style>
