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

@include until('small') {
  .accessoires {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
  }
}
</style>