<template>
  <div class="accessoires">
    <ProductList :filterCategory="'accessoires'" :minPrice="0" :maxPrice="600" />
  </div>
</template>

<script lang="ts" setup>
import ProductList from '../components/ProductList.vue'
</script> 

<style lang="scss" scoped>
.accessoires {
  width: 90%;
  margin: 0 auto;
}
</style>