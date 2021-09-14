<template>
  <div class="overflow-x-hidden">
    <BannerComponent />
    <ServicesComponent />
    <VideoPlayerComponent />
    <HowToComponent />
    <AppScreenComponent />
    <FeaturesComponent />
    <QuestionsComponent />
    <ContactUsComponent />
    <RewayaComnponent />
  </div>
</template>

<script>
import BannerComponent from "@/components/home/ar/BannerComponent.vue";
import ServicesComponent from "@/components/home/ar/ServicesComponent.vue";
import VideoPlayerComponent from "@/components/home/ar/VideoPlayerComponent.vue";
import HowToComponent from "@/components/home/ar/HowToComponent.vue";
import AppScreenComponent from "@/components/home/ar/AppScreenComponent.vue";
import FeaturesComponent from "@/components/home/ar/FeaturesComponent.vue";
import QuestionsComponent from "@/components/home/ar/QuestionsComponent.vue";
import ContactUsComponent from "@/components/home/ar/ContactUsComponent.vue";
import RewayaComnponent from "@/components/home/ar/RewayaComnponent.vue";

export default {
  name: "ArHome",
  components: {
    BannerComponent,
    ServicesComponent,
    VideoPlayerComponent,
    HowToComponent,
    AppScreenComponent,
    QuestionsComponent,
    FeaturesComponent,
    ContactUsComponent,
    RewayaComnponent,
  },
};
</script>
