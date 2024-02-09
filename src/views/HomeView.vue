<template>
  <div class="home">
   <UsSection /> 
    <ContactSection />
     <InfoSection /> 
  <Footer />
  </div>
</template>

<script>
import UsSection from '@/components/home/UsSection-component.vue'
import ContactSection from '@/components/home/ContactSection-component.vue'
import InfoSection from '@/components/home/InfoSection-component.vue'
import Footer from '@/components/home/Footer-component.vue'

// @ is an alias to /src
export default {
  components: {
    ContactSection,
    UsSection,
    InfoSection,
    Footer,
  },
};
</script>
