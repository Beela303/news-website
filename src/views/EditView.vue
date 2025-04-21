<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import EditNews from '@/components/EditNews.vue'

export default {
  name: 'EditView',

  components: {
    Header,
    Footer,
    EditNews,
  },
}
</script>

<template>
  <Header></Header>
  <router-link to="/dashboard" class="back">Back</router-link>
  <h1>Edit your favorite News</h1>
  <EditNews></EditNews>
  <Footer></Footer>
</template>
