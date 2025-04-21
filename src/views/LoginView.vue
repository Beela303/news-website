<script>
import axios from 'axios'

export default {
  name: 'LoginView',

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=$(this.email)&password=$(this.password)`,
      )

      if (result.status == 200) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({ name: 'HomeView' })
      }

      /*
            if (result.status==200 && result.data.length>0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: "Home"})
            }
            */

      console.warn(result)
    },
  },

  mounted() {
    let user = localStorage.getItem('user-info')

    if (user) {
      this.$router.push({ name: 'HomeView' })
    }
  },
}
</script>

<template>
  <h1>Login</h1>

  <div id="login">
    <input type="text" v-model="email" placeholder="Enter Email" id="" />
    <input type="password" v-model="password" placeholder="Enter Password" id="" />

    <button v-on:click="login">Login</button>

    <p>
      <router-link to="/sign-up">SignUp</router-link>
    </p>
  </div>
</template>

<style></style>
