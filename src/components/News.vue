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
  <div id="news-body" v-for="item in news" :key="item.id">
    <div class="news">
      <h2><b>Title:</b> {{ item.title }}</h2>
      <h3><b>Author:</b> {{ item.author }}</h3>
      <p><b>Description:</b> {{ item.description }}</p>
      <!--<p><b>Details:</b>{{ item.details }}</p>-->
      <router-link :to="'/news/details/' + item.id">View News</router-link>
    </div>
  </div>
</template>

<style>
#news-body {
  display: grid;
  grid-template-columns: repeat(autofit, minmax(100px, 1fr));
  grid-gap: 10px;
}

.news {
  color: white;
  /*background-color: #137295;*/
  background-color: #2b2929;

  height: 250px;
  margin: 2%;

  border: 1px solid grey;
  border-radius: 30px;
}

.news a {
  color: white;
  background-color: blueviolet;

  border-radius: 15px;
  border: 10px solid blueviolet;

  text-decoration: none;
}
</style>
