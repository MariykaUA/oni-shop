<template>
  <div class="accessoires">
    <h1 class="headline">Accessoires collection</h1>
    <ProductList 
      :filterCategory="'accessoires'" 
      :minPrice="0" 
      :maxPrice="600" 
      :userSearch="''" 
      @productSelected="openProductPage" 
    />
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
.accessoires {
  width: 90%;
  margin: 0 auto;
}

.headline {
  text-align: center;
  margin: 3rem 0;
  font-size: 2rem;
  color: $primary-color;
  font-family: $font-secondary;
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

  .headline {
    font-size: 1.75rem;
    margin-top: 2rem;
    margin-bottom: 0;
  } 
}
</style>