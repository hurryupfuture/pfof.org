<template>
  <Nav/>
  <div class="container">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Nav,
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
