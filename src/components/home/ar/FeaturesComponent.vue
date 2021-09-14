<template>
  <div class="w-full pt-24 px-10">
    <h1
      class="text-3xl text-center text-gray-500 mb-8"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      ميزات متعددة للوحة التحكم
    </h1>
    <p
      class="text-lg text-center text-gray-400 mx-auto max-w-screen-md"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      Sigma هو تطبيق مراسلة للجوال وسطح المكتب قائم على السحابة مع التركيز على
      الأمن والسرعة. يمكنك استخدامه في أي منصة.
    </p>

    <a
      href="#"
      class="portal__features"
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      افتح منفذ
    </a>

    <img
      src="@/assets/images/Macbook.png"
      alt="app screens images"
      class="
        w-full
        max-h-[500px]
        h-auto
        max-w-screen-xl
        mt-16
        mx-auto
        object-contain
      "
      data-aos="fade-up"
      data-aos-duration="1500"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.portal__features {
  box-shadow: 0 15px 50px 0 #7d93b250;
  @apply w-auto py-3 px-8 rounded-xl text-white font-semibold my-10 transition-transform duration-300 ease-in-out bg-yellow-300  transform hover:-translate-y-1 mx-auto table;
}
</style>