<template>
  <div>
    <HeroSection />
    <ProofSection />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import ProofSection from './components/ProofSection.vue';
export default {
  name: 'App',
  components: {
    HeroSection, ProofSection
  }
}
</script>


