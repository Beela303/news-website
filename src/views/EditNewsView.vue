<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Edit from '@/components/Edit.vue'

export default {
  name: 'EditNewsView',

  components: {
    Header,
    Footer,
    Edit,
  },
}
</script>

<template>
  <Header></Header>
  <router-link to="/news/edit/:id" class="back">Back</router-link>
  <h1>Edit your favorite gossip, friend!</h1>
  <Edit></Edit>
  <Footer></Footer>
</template>
