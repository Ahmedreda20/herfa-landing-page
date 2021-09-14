<template>
  <div class="grid gap-6 lg:grid-cols-2 grid-cols-1 dir-right">
    <div
      class="w-full h-auto p-4"
      v-for="(question, index) in questions"
      :key="index"
      :data-aos="animations[index]"
      data-aos-duration="1500"
    >
      <h1
        class="
          text-2xl
          sm:text-3xl
          text-gray-500
          mb-4
          flex
          items-start
          justify-start
        "
      >
        <img
          :src="require(`@/assets/icons/${icons[index]}`)"
          alt="question icon"
          class="ml-4 self-center"
          width="16"
          heihgt="17"
        />
        <span>{{ question.question_ar }}</span>
      </h1>
      <p class="text-gray-400 text-base">
        {{ question.answer_ar }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: [],
    icons: [],
    animations: [],
  },

  name: "SingleQuestion",
};
</script>

<style>
</style>