<template>
  <div class="shoes">
    <ProductList :filterCategory="'shoes'" :minPrice="0" :maxPrice="600" />
  </div>
</template>

<script lang="ts" setup>
import ProductList from '../components/ProductList.vue'
</script> 

<style lang="scss" scoped>
.shoes {
  margin: 0 auto;
  width: 90%;
}

@include until('small') {
  .shoes {
    width: 100%;
  }
}
</style>