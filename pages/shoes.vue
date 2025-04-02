<template>
  <div class="shoes">
    <ProductList :filterCategory="'shoes'" />
  </div>
</template>

<script lang="ts" setup>
import ProductList from '../components/ProductList.vue'
</script> 