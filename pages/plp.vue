<template>
  <div>
    <Breadcrumbs />
    <div class="container">
    <div class="filter">
      <div class="types">
        <h3>Type</h3>
        <ul>
          <li>All</li>
          <li>Shoes</li>
          <li>Apparel</li>
          <li>Accessoires</li>
        </ul>
      </div>
      <div class="price">
        <h3 class="price-title">price</h3>
      </div>
    </div>
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
import { ref } from 'vue'

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    inStock: boolean;
    category: string;
  }
  
    const products = ref<Product[]>([]);
    const errorMessage = ref('');
    const category = ref<string>('');

    function filterByCategory() {
      if (category.value === 'All') {
        return products.value;
      } else if (category.value === 'Shoes') {
        return products.value.filter((product) => product.category === 'shoes');
      } else if (category.value === 'Apparel') {
        return products.value.filter((product) => product.category === 'apparel');
      } else if (category.value === 'Accessoires') {
        return products.value.filter((product) => product.category === 'accessoires');
      } else {
        errorMessage.value = 'Invalid category';
        return errorMessage.value;
      }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/breakpoints.scss';

.container {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 2rem;
  margin: 0 4rem;
}

.types {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #e2e2e262;  
  border-radius: 4px;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #e2e2e262;  
  border-radius: 4px;
}

.price-title {
  font-variant: small-caps;
}
</style>
