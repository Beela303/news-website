<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DashboardView',

  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <Header></Header>
  <h1>Welcome to your Dashboard</h1>

  <div>
    <router-link to="/news/post">Post</router-link>
    <router-link to="/news/edit">Edit</router-link>
    <router-link to="/news/delete" id="delete">Delete</router-link>
  </div>

  <Footer></Footer>
</template>

<style scoped>
div {
  height: 20rem;

  margin-top: 5rem;
}

div a {
  color: white;
  background: blueviolet;

  height: 300px;

  margin: 5%;

  border-radius: 25px;
  border: 20px solid blueviolet;

  font-size: 2rem;
  text-decoration: none;
}

#delete {
  background: red;
  border: 20px solid red;
}
</style>
