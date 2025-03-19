<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="routes">
    <router-link to="/">Home</router-link>
    <router-link to="/car-types">Car types</router-link>
    <router-link to="/order-summary">Order summary</router-link>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
.routes {
  background-color: rgb(73, 97, 158);
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding:1rem;

  a {
    text-decoration: none;
    color: rgb(242, 242, 242);
    font-size: 1.5rem;
    font-weight: 500;

    &:hover {
      color: rgb(6, 13, 93);
    }
  }
}
</style>
