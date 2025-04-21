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

  async mounted() {
    let result = await axios.get('http://localhost:3000/news')

    console.warn(result)

    this.news = result.data
  },
}
</script>

<template>
  <div id="news-body" v-for="item in news" :key="item.id">
    <div class="news">
      <h2><b>Title:</b> {{ item.title }}</h2>
      <h3><b>Author:</b> {{ item.author }}</h3>
      <p><b>Description</b> {{ item.description }}</p>
      <p><b>Details:</b>{{ item.details }}</p>
      <button type="button">
        <router-link :to="'/news/edit/' + item.id">Edit News</router-link>
      </button>
    </div>
  </div>
</template>

<style scoped>
.news {
  height: 300px;
}

.news button {
  color: white;

  width: 70%;
  height: 50px;

  border-radius: 30px;

  cursor: pointer;

  transition: 2s;
}

.news button:hover {
  color: #137295;
  background-color: white;
}
</style>
