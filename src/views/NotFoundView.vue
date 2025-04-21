<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'NotFoundView',

  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <Header></Header>
  <h1>404</h1>
  <Footer></Footer>
</template>

<style scoped>
h1 {
  font-size: 5rem;
}
</style>
