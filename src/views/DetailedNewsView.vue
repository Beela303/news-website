<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import DetailedNews from '@/components/DetailedNews.vue'

export default {
  name: 'DetailedNewsView',

  components: {
    Header,
    Footer,
    DetailedNews,
  },
}
</script>

<template>
  <Header></Header>
  <DetailedNews></DetailedNews>
  <Footer></Footer>
</template>
