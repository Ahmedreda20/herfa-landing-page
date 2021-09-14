<template>
  <div class="w-full xl:container mx-auto p-6 my-10 pb-20">
    <h1
      class="
        text-4xl text-center
        max-w-screen-sm
        text-gray-500
        font-light
        mx-auto
        mb-14
      "
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      Have any Questions?
    </h1>
    <div class="mb-10 w-full" data-aos="zoom-out" data-aos-duration="1500">
      <SingleQuestion
        :questions="questionsList"
        :icons="icons"
        :animations="animations"
      />
    </div>
    <button
      class="
        table
        mx-auto
        text-center
        pt-2
        pb-4
        px-8
        rounded-lg
        border border-gray-400
        text-gray-400 text-base
      "
      type="button"
      aria-label="load more querstions"
      data-aos="zoom-in"
      data-aos-duration="1500"
      @click="handleQuestions"
    >
      اقرأ أكثر
    </button>
  </div>
</template>

<script>
import SingleQuestion from "./SingleQuestion.vue";
export default {
  data() {
    return {
      questions: [],
      questionsList: [],
      questionsItem: 6,
      icons: [],
      animations: [],
    };
  },
  created() {
    this.fetchData("https://apis.handesmade.com/api/help");
  },
  methods: {
    async fetchData(api) {
      const response = await fetch(api);
      const data = response.json();
      const self = this;
      const Icons = [
        "q-purple.svg",
        "q-blue.svg",
        "q-green.svg",
        "q-red.svg",
        "q-pink.svg",
        "q-yellow.svg",
      ];
      const Animates = ["fade-up-left", "fade-up-right"];
      data.then(({ result }) => {
        const length = result.help[0].questions.length;

        self.questions = result.help[0].questions;
        self.pushQuestionsInsideTheirList();

        // create icons to match all questions;
        const newIcons = Array(length).fill(Icons).flat().slice(0, length);
        self.icons = newIcons;
        const newAnimates = Array(length)
          .fill(Animates)
          .flat()
          .slice(0, length);
        self.animations = newAnimates;
      });
    },
    pushQuestionsInsideTheirList() {
      let Questions = this.questions;
      let Item = this.questionsItem;
      this.questionsList = Questions.slice(0, Item);
    },
    handleQuestions() {
      const self = this;
      if (self.questionsItem < self.questions.length) {
        // increase item
        self.questionsItem += 6;
        self.pushQuestionsInsideTheirList();
      } else {
        return false;
      }
    },
  },
  components: {
    SingleQuestion,
  },
};
</script>

<style>
</style>