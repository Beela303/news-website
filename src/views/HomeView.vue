<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import News from '@/components/News.vue'

export default {
  name: 'HomeView',

  components: {
    Header,
    Footer,
    News,
  },
}
</script>

<template>
  <Header></Header>
  <h1>Welcome to your favorite gossip friend</h1>
  <News></News>
  <Footer></Footer>
</template>
