<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/car-types">Car Types</router-link>
    <router-link to="/order-summary">Order Summary</router-link>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
