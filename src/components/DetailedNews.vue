<script>
import axios from 'axios'

export default {
  data() {
    return {
      news: {
        title: '',
        author: '',
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
  <!---<div id="news-body" v-for="item in news" :key="item.id">-->
  <div class="news" v-for="item in news" :key="item.id">
    <h2><b>Title:</b> {{ item.title }}</h2>
    <h3><b>Author:</b> {{ item.author }}</h3>
    <p><b>Description:</b> {{ item.description }}</p>
    <p><b>Details:</b>{{ item.details }}</p>
  </div>
  <!----</div>-->
</template>

<style scoped>
.news {
  color: black;
  /*background-color: #137295;*/
  background-color: white;

  width: 95%;
  margin: 2%;
}
</style>
