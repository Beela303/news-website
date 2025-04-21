<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios'

export default {
  name: 'DeleteView',

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      news: {
        title: '',
        author: '',
        description: '',
        details: '',
      },
    }
  },

  methods: {
    deleteNews() {
      let result = axios.delete('http://localhost:3000/news/' + this.$route.params.id)

      console.warn(result)

      if (result.status == 200) {
        this.loadData()
      }
    },

    async loadData() {
      let result = await axios.get('http://localhost:3000/news')

      console.warn(result)

      this.news = result.data
    },
  },

  async mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({ name: 'LoginView' })
    }

    this.loadData()
  },
}
</script>

<template>
  <Header></Header>

  <router-link to="/dashboard" class="back">Back</router-link>

  <h1>Delete News</h1>

  <div id="news-body" v-for="item in news" :key="item.id">
    <div class="news">
      <h2><b>Title:</b> {{ item.title }}</h2>
      <h3><b>Author:</b> {{ item.author }}</h3>
      <p><b>Description</b> {{ item.description }}</p>
      <p><b>Details:</b>{{ item.details }}</p>
      <button type="button" v-on:click="deleteNews(item.id)">Delete News</button>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
.news {
  height: 300px;
}

.news button {
  color: white;
  background-color: red;

  width: 70%;
  height: 50px;

  border-radius: 30px;

  cursor: pointer;

  transition: 2s;
}

.news button:hover {
  color: red;
  background-color: white;
}
</style>
