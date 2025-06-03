<template>
  <div class="shoes">
    <h1 class="headline">Shoes collection</h1>
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
.headline {
  text-align: center;
  margin: 3rem 0;
  font-size: 2rem;
  color: $primary-color;
  font-family: $font-secondary;
}

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

  .headline {
    font-size: 1.75rem;
    margin-top: 2rem;
    margin-bottom: 0;
  } 
}
</style>