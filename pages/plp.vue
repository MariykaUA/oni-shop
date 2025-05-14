<template>
  <div>

    <Breadcrumbs />

    <div class="container">
      <FilterProducts 
      v-model:category="selectedCategory"
      @update:minPrice="minPrice = $event"
      @update:maxPrice="maxPrice = $event" /> 

      <div class="products">
        <TeaserBanner class="banner"/>
        <div class="product-list-wrapper">
          <ProductList 
          :filter-category="selectedCategory"
          :min-price="minPrice"
          :max-price="maxPrice"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProductList from '../components/ProductList.vue'
import TeaserBanner from '../components/TeaserBanner.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import FilterProducts from '../components/FilterProducts.vue';

const selectedCategory = ref('All')
const minPrice = ref(0)         
const maxPrice = ref(600)  
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 2rem;
  margin: 0 4rem;
}

.product-list-wrapper {
  margin-left: 1.6rem;
}

.banner {
  width: fit-content;
}
</style>
