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
import BannerComponent from "@/components/home/BannerComponent.vue";
import ServicesComponent from "@/components/home/ServicesComponent.vue";
import VideoPlayerComponent from "@/components/home/VideoPlayerComponent.vue";
import HowToComponent from "@/components/home/HowToComponent.vue";
import AppScreenComponent from "@/components/home/AppScreenComponent.vue";
import FeaturesComponent from "@/components/home/FeaturesComponent.vue";
import QuestionsComponent from "@/components/home/QuestionsComponent.vue";
import ContactUsComponent from "@/components/home/ContactUsComponent.vue";
import RewayaComnponent from "@/components/home/RewayaComnponent.vue";

export default {
  name: "Home",
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
