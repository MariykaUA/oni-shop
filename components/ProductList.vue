<template>
    <div class="product-list" :key="$route.fullPath">
      <div v-for="product in filteredProducts" 
      :key="product.id" 
      class="product-item"
      @click="handleProductClick(product.id)">

        <img 
        :src="product.colors?.[0]?.image || product.image"
        :alt="product.name" 
        class="product-image"/>

        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <div class="product-price-stock">
            <p class="product-price">{{ product.price }}$
            </p>
            <p v-if="product.inStock" 
            class="in-stock">In stock</p>
            <p v-else>Out of stock</p>
          </div>  
        </div>
      </div>

      <p v-if="status === 'pending'">Loading products...</p>
      <p v-if="status === 'error'">{{ errorMessage }}</p>
      <p v-else-if="filteredProducts.length === 0 && searchQuery">
        {{ "No products found for '" + searchQuery + "'." }}
      </p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSearch } from '~/composables/useSearch'
import { useAsyncData } from 'nuxt/app';

const { searchQuery } = useSearch()
const route = useRoute()

export interface Product {
  id: string;
  name: string;
  image: string 
  colors: { image: string, gallery: string, name: string, inStock: string }[];
  price: number;
  inStock: boolean;
  category: string;
  description: string;
}

const props = defineProps<{
filterCategory: string,
minPrice: number,
maxPrice: number,
userSearch: string }>()

const productsKey = computed(() => `products-${route.fullPath}`);

const { data: products, status, error } = await useAsyncData(
  productsKey.value, // Dynamic key
  () => $fetch('/api/products'),
  {
    watch: [() => route.fullPath] // reload data on every navigation to this page
  }
);
 
const errorMessage = computed(() => {
  return error.value instanceof Error ? error.value.message : 'An unknown error occurred.';
});

const filteredProducts = computed(() => {
  return (products.value as Product[])?.filter((product: Product) => {
    const matchesCategory = !props.filterCategory || product.category?.toLowerCase() === props.filterCategory.toLowerCase();

    const matchesPrice = product.price >= props.minPrice && product.price <= props.maxPrice;

    const matchesSearch =
      !searchQuery.value ||
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesCategory && matchesPrice && matchesSearch;
  }) || [];
});

  const emit = defineEmits<(e: 'productSelected', id: string) => void>()

  const handleProductClick = (id: string) => {
    emit('productSelected', id);
  };
</script>
  
<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  justify-content: flex-start;
  gap: 1.8rem;
  margin: 3rem 0;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 300px;
  cursor: pointer;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 2px;
}

.product-image {
  display: block;
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  object-fit: cover;
}

.product-name {
  font-size: 1rem;
  font-weight: 500;
}

.product-price {
  font-size: 1.25rem;
  color: $price;
}

.product-price-stock {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.in-stock {
  color: $in-stock;
}

@include until('small') {
  .product-list {
    width: 300px;

  }

  .product-item {
    width: 100%;
    max-width: 300px;
  }

  .product-image {
    height: 200px;
    width: 100%;
  }
}
</style>