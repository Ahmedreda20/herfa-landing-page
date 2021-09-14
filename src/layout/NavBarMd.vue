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
        <li class="my-2" v-for="(page, index) in pages" :key="index">
          <router-link
            to="/"
            class="text-base p-2 font-light"
            active-class="text-gray-700"
            >{{ page }}</router-link
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