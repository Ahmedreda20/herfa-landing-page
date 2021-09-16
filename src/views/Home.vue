<template>
  <div class="overflow-x-hidden">
    <BannerComponent :direction="dir" />
    <ServicesComponent :direction="dir" />
    <VideoPlayerComponent :direction="dir" />
    <HowToComponent :direction="dir" />
    <AppScreenComponent :direction="dir" />
    <FeaturesComponent :direction="dir" />
    <QuestionsComponent :direction="dir" />
    <SuccessComponent :direction="dir" />
    <ContactUsComponent :direction="dir" />
    <RewayaComnponent :direction="dir" />
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
import SuccessComponent from "@/components/home/SuccessComponent.vue";
import ContactUsComponent from "@/components/home/ContactUsComponent.vue";
import RewayaComnponent from "@/components/home/RewayaComnponent.vue";

export default {
  props:{dir: Boolean},
  
  name: "Home",
  components: {
    BannerComponent,
    ServicesComponent,
    VideoPlayerComponent,
    HowToComponent,
    AppScreenComponent,
    FeaturesComponent,
    QuestionsComponent,
    SuccessComponent,
    ContactUsComponent,
    RewayaComnponent,
  },
};
</script>
