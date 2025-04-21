<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'

export default {
  name: 'AboutView',

  components: {
    Header,
    Footer,
    About,
  },
}
</script>

<template>
  <Header></Header>
  <h1>About your favorite gossip friend</h1>
  <About></About>
  <Footer></Footer>
</template>
