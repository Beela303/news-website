<script>
import axios from 'axios'

export default {
  name: 'SignupView',

  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },

  methods: {
    async SignUp() {
      let result = await axios.post('http://localhost:3000/users', {
        email: this.email,
        password: this.password,
        name: this.name,
      })

      console.warn(result)

      if ((result.status = 201)) {
        //alert("Signed up successfully")

        localStorage.setItem('User info', JSON.stringify(result.data))

        this.$router.push({ name: 'HomeView' })
      }
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
  <h1>Signup</h1>

  <div id="signup">
    <input type="text" v-model="name" placeholder="Enter Name" id="" />
    <input type="text" v-model="email" placeholder="Enter Email" id="" />
    <input type="password" v-model="password" placeholder="Enter Password" id="" />

    <button v-on:click="SignUp">Sign Up</button>

    <p>
      <router-link to="/Login">Login</router-link>
    </p>
  </div>
</template>

<style></style>
