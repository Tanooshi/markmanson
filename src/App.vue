<template>
  <div>
    <HeroSection />
    <ProofSection />
    <FeaturedSection />
    <BlogsSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import ProofSection from './components/ProofSection.vue';
import FeaturedSection from './components/FeaturedSection.vue';
import BlogsSection from './components/BlogsSection.vue'
import FooterSection from './components/FooterSection.vue';
export default {
  name: 'App',
  components: {
    HeroSection, ProofSection, FeaturedSection, BlogsSection, FooterSection
  }
}
</script>


