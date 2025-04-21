<script>
export default {
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <a v-on:click="logout" href="">Logout</a>
  </nav>
</template>

<style>
nav {
  background-color: #333;

  height: 2.5rem;

  overflow: hidden;
}

nav a {
  color: #f2f2f2;

  margin: 5px;
  padding: 16px 14px;

  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
}

nav a:hover {
  color: #333;
  background-color: #ddd;
}
</style>
