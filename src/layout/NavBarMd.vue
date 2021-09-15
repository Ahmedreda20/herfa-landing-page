<template>
  <div
    :class="`absolute w-full sm:w-70 h-auto max-h-screen bg-white flex items-center justify-center flex-col top-full right-0 p-4 visible__elem ${
      active ? 'active' : ''
    }`"
  >
    <nav class="mb-6">
      <ul
        class="list-none flex items-center justify-center flex-nowrap flex-col"
      >
        <li class="m-2">
          <router-link
            to="/"
            class="text-base p-2 font-light"
            active-class="text-gray-700"
            >{{ $t("header.nav.name_0") }}</router-link
          >
        </li>
        <li class="m-2">
          <router-link
            to="/"
            class="text-base p-2 font-light"
            active-class="text-gray-700"
            >{{ $t("header.nav.name_1") }}</router-link
          >
        </li>
        <li class="m-2">
          <router-link
            to="/"
            class="text-base p-2 font-light"
            active-class="text-gray-700"
            >{{ $t("header.nav.name_2") }}</router-link
          >
        </li>
      </ul>
    </nav>
    <button class="header__btn" aria-label="open portal">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pages: [],
    button: String,
    active: Boolean,
  },
  name: "NavBarMd",
};
</script>

<style>
</style>