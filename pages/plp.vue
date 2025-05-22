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
          :max-price="maxPrice"
          :userSearch="searchQuery" 
          @productSelected="openProductPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSearch } from '~/composables/useSearch'
import { useRoute, useRouter } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import TeaserBanner from '../components/TeaserBanner.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import FilterProducts from '../components/FilterProducts.vue';

const selectedCategory = ref<string>('All')
const minPrice = ref<number>(0)
const maxPrice = ref<number>(600)

const route = useRoute()
const router = useRouter()

const { searchQuery } = useSearch()

onMounted(() => {
  const search = route.query.search
  if (typeof search === 'string') {
    searchQuery.value = search
  }
})

onBeforeUnmount(() => {
  searchQuery.value = '' // Clear on leave
})

const openProductPage = (id: string) => {
  router.push(`/pdp/${id}`) }
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 2rem;
  margin: 0 4rem;
}

.product-list-wrapper {
  margin-left: 1.75rem;
}

.banner {
  width: fit-content;
}

@include until('small') {
  .container {
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    margin-top: -2rem;
  }

  .product-list-wrapper {
    margin-left: 0;
  }
}
</style>
