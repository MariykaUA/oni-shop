<template>
    <div class="product-list">
      <div v-for="product in filteredProducts" 
      :key="product.id" 
      class="product-item">

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
      <p v-if="error">{{ errorMessage }}</p>

      <p v-else-if="filteredProducts.length === 0 && searchQuery">
        {{ "No products found for '" + searchQuery + "'." }}
      </p>
      <p v-else-if="products.length === 0 && !error">Loading products...</p>
    </div>
</template>

<script lang="ts" setup>
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../assets/firebase';
import { ref, onMounted, computed } from 'vue';
import { useSearch } from '~/composables/useSearch'

const { searchQuery } = useSearch()

interface Product {
  id: string;
  name: string;
  image: string 
  colors: { image: string, gallery: string, name: string, inStock: string }[];
  price: number;
  inStock: boolean;
  category: string;
}
  
  const products = ref<Product[]>([]);
  const error = ref(false);
  const errorMessage = ref('');

  const props = defineProps<{
  filterCategory: string,
  minPrice: number,
  maxPrice: number }>()

  const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesCategory = !props.filterCategory || product.category?.toLowerCase() === props.filterCategory.toLowerCase();

    const matchesPrice = product.price >= props.minPrice && product.price <= props.maxPrice;

    const matchesSearch =
      !searchQuery.value ||
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesCategory && matchesPrice && matchesSearch;
  });
});

  onMounted(async () => {
    error.value = false; 
    products.value = [];

    try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach((doc) => {
      products.value.push({ 
        id: doc.id, ...doc.data() } as Product);
    });
    
    }

    catch (e: any) {
      console.error('Error loading products', e);
      
      error.value = true;
      errorMessage.value = e.message || 'Failed to load products';
    }
  });
</script>
  
<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  justify-content: flex-start;
  gap: 2rem;
  margin: 3rem 0;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 300px;
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
  background-color: rgb(159, 159, 159);
  flex-shrink: 0;
  object-fit: cover;
}

.product-name {
  font-size: 1rem;
  font-weight: 500;
}

.product-price {
  font-size: 1.25rem;
  color: rgb(176, 82, 34);
}

.product-price-stock {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.in-stock {
  color: rgb(40, 156, 40);
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