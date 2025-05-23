<template>
  <div class="shoes">
    <ProductList 
    :filterCategory="'shoes'" 
    :minPrice="0" 
    :maxPrice="600" 
    :userSearch="''" 
    @productSelected="openProductPage"/>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ProductList from '../components/ProductList.vue'

const router = useRouter()

const openProductPage = (id: string) => {
  router.push(`/pdp/${id}`)
}
</script>

<style lang="scss" scoped>
.shoes {
  margin: 0 auto;
  width: 90%;
}

@include until('small') {
  .shoes {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
  }
}
</style>