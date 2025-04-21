<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body {
  padding: 0;
  margin: 0;

  text-align: center;
}

.logo {
  width: 100px;
  border-radius: 50px;
}

.post,
.edit {
  margin: 30px;
}

#signup input,
#login input,
.post input,
.edit input {
  width: 350px;
  height: 50px;

  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;

  border: 1px solid #4c6c79;

  font-size: 1.5rem;

  display: block;
}

#signup button,
#login button,
.post button,
.edit button {
  width: 400px;
  height: 50px;

  border: 1px solid cadetblue;
  border-radius: 25px;

  color: white;
  background-color: #424da0;

  font-size: 2rem;

  cursor: pointer;
}
</style>
