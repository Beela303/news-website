<script>
import axios from 'axios'

export default {
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
    async addNews() {
      console.warn(this.news)

      const result = await axios.post('http://localhost:3000/news', {
        title: this.news.title,
        author: this.news.author,
        description: this.news.description,
        details: this.news.details,
      })

      if (result.status == 201) {
        this.$router.push({ name: 'HomeView' })
      }

      console.warn('result', result)
    },
  },

  async mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({ name: 'LoginView' })
    }
  },
}
</script>

<template>
  <form class="post">
    <input type="text" name="title" placeholder="Enter Title" v-model="news.title" />
    <input type="text" name="author" placeholder="Enter Author's name" v-model="news.author" />
    <input
      type="text"
      name="description"
      placeholder="Enter Description"
      v-model="news.description"
    />
    <input type="text" name="details" placeholder="Enter details" v-model="news.details" />
    <button type="button" v-on:click="addNews">Post News</button>
  </form>
</template>
