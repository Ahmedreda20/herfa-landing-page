<template>
  <form novalidate class="w-full">
    <div class="form__group" data-aos="fade-up" data-aos-duration="1500">
      <input
        type="text"
        id="name"
        autocomplete="off"
        spellcheck="true"
        required
        class="form__control"
      />
      <label for="name" class="form__label">Name</label>
    </div>
    <div class="form__group" data-aos="fade-down" data-aos-duration="1500">
      <input
        type="email"
        id="email"
        autocomplete="off"
        spellcheck="true"
        required
        class="form__control"
      />
      <label for="email" class="form__label">Email</label>
    </div>
    <div class="form__group" data-aos="fade-up" data-aos-duration="1500">
      <input
        type="text"
        id="subject"
        autocomplete="off"
        spellcheck="true"
        required
        class="form__control"
      />
      <label for="subject" class="form__label">Your message subject</label>
    </div>
    <div class="form__group" data-aos="fade-down" data-aos-duration="1500">
      <textarea
        id="message"
        autocomplete="off"
        spellcheck="true"
        required
        class="form__control min-h-[150px]"
      ></textarea>
      <label for="message" class="form__label">Your message </label>
    </div>
    <div class="form__group" data-aos="fade-left" data-aos-duration="1500">
      <button class="submit__btn" aria-label="submit button" type="submit">
        Send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
.form__label {
  @apply absolute top-3 text-xl left-6 transition-all text-gray-400;
}
.form__control {
  @apply w-full
          border border-gray-400
          py-6
          px-6
          text-lg
          font-light
          rounded-xl;
}
.form__group {
  @apply w-full h-auto relative my-4;
}

.form__group > .form__control:valid + label,
.form__group > .form__control:focus + label {
  @apply text-base -top-3 bg-white px-2;
}
.form__group > .form__control:focus:invalid {
  @apply border-red-300 text-red-400;
}
.form__group > .form__control:focus:invalid + label {
  @apply text-red-400;
}
.submit__btn {
  box-shadow: 0 15px 50px 0 #7d93b250;
  @apply py-3 px-8 rounded-xl text-white font-semibold  transition-transform duration-300 ease-in-out bg-yellow-300 transform hover:-translate-y-1 w-60 table ml-auto;
}
</style>