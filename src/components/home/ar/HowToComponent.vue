<template>
  <div class="w-full xl:container mx-auto p-6 my-10 pb-20 mb-20 dir-right">
    <h1
      class="
        text-4xl text-center
        max-w-screen-sm
        text-gray-500
        font-light
        mx-auto
        mb-14
      "
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      كيف تستخدم
    </h1>
    <p
      class="text-lg text-center text-gray-400 mx-auto max-w-screen-md"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      قابل سيجما. التطبيق البسيط والبديهي والقوي لإدارة عملك. استكشف تطبيق الجيل
      القادم مجانًا وكن جزءًا من المجتمع من الأعضاء ذوي التفكير المماثل.
    </p>
    <SingleItemComponent
      title="تسوق حسب الاقسام"
      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
      icon="Icon awesome-search.png"
      img="shop.png"
      imgAnimate="fade-up-right"
      boxAnimate="fade-down-left"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />

    <SingleItemComponent
      title="أضف اختيارك إلى السلة"
      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
      icon="Shopping Cart_2.png"
      img="cart.png"
      imgAnimate="fade-up-left"
      boxAnimate="fade-down-right"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />

    <SingleItemComponent
      title="أضف متجرك وابدأ في بيع منتجاتك"
      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
      icon="Icon metro-shop.png"
      img="mange.png"
      imgAnimate="fade-up-right"
      boxAnimate="fade-down-left"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />

    <SingleItemComponent
      title="قم بإدارة متجرك وابدأ البيع معنا"
      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
      icon="Icon ionic-ios-settings.png"
      img="mask.png"
      imgAnimate="fade-up-left"
      boxAnimate="fade-down-right"
      contentAnimate="fade-left"
      titleAnimate="fade-up"
      iconAnimate="fade-down"
    />
  </div>
</template>

<script>
import SingleItemComponent from "@/components/home/SingleItemComponent.vue";
export default {
  components: {
    SingleItemComponent,
  },
  name: "HowToComponent",
};
</script>

<style>
</style>