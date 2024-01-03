<template>
  <div class="hello">
    <HeroSection id="home" />
    <ServicesView id="services" />
    <FeaturesView id="benefits" />
    <!-- <FlowingText /> -->
    <FaqAccordion id="faq" />
    <FooterView />
  </div>
</template>

<script>
import FaqAccordion from './FaqAccordion.vue';
import FeaturesView from './FeaturesView.vue';
// import FlowingText from './FlowingText.vue';
import FooterView from './FooterView.vue';
import HeroSection from './HeroSection.vue';
import ServicesView from './ServicesView.vue';
// import ServicesView from './ServicesView.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    HeroSection,
    // ServicesView,
    FeaturesView,
    FooterView,
    FaqAccordion,
    ServicesView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
