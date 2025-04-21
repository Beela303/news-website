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
    async updateNews() {
      console.warn(this.news)

      const result = await axios.put('http://localhost:3000/news' + this.$route.params.id, {
        title: this.news.title,
        author: this.news.author,
        description: this.news.description,
        details: this.news.details,
      })

      if (result.status == 200) {
        this.$router.push({ name: 'Home' })
      }

      console.warn('result', result)
    },
  },

  async mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({ name: 'LoginView' })
    }

    const result = await axios.get('http://localhost:3000/news/' + this.$route.params.id)

    //console.warn(this.$route.params.id)
    console.warn(result.data)

    this.news = result.data
  },
}
</script>

<template>
  <form class="post">
    <input type="text" name="title" placeholder="Edit Title" v-model="news.title" />
    <input type="text" name="author" placeholder="Edit Author's name" v-model="news.author" />
    <input
      type="text"
      name="description"
      placeholder="Edit Description"
      v-model="news.description"
    />
    <input type="text" name="details" placeholder="Edit details" v-model="news.details" />
    <button type="button" v-on:click="updateNews">Update News</button>
  </form>
</template>
