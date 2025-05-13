<template>
  <div class="shoes">
    <ProductList :filterCategory="'shoes'" />
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
</style>