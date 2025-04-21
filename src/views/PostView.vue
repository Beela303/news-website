<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'PostView',

  components: {
    Header,
    Footer,
    Post,
  },
}
</script>

<template>
  <Header></Header>
  <router-link to="/dashboard" class="back">Back</router-link>
  <h1>Post your favorite gossip!</h1>
  <Post></Post>
  <Footer></Footer>
</template>

<style>
.back {
  font-size: 2rem;
  float: left;
}
</style>
