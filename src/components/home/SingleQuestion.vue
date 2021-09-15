<template>
  <div class="grid gap-6 lg:grid-cols-2 grid-cols-1">
    <div
      class="w-full h-auto p-4"
      v-for="(question, index) in questions"
      :key="index"
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
          :class="`${direction ? 'ml-4' : 'mr-4'} self-center`"
          width="16"
          heihgt="17"
        />
        <span>{{
          direction ? question.question_ar : question.question_en
        }}</span>
      </h1>
      <p class="text-gray-400 text-base">
        {{ direction ? question.answer_ar : question.answer_en }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: [],
    icons: [],
    direction: Boolean,
  },

  name: "SingleQuestion",
};
</script>

<style>
</style>