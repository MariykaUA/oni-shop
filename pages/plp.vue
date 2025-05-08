<template>
  <div>

    <Breadcrumbs />

    <div class="container">
      <FilterProducts />
      <div class="products">
        <TeaserBanner />
        <ProductList />
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import ProductList from '../components/ProductList.vue'
import TeaserBanner from '../components/TeaserBanner.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import FilterProducts from '../components/FilterProducts.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/breakpoints.scss';

.container {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 2rem;
  margin: 0 4rem;
}
</style>
