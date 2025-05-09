<template>
    <div class="product-list">
      <div v-for="product in filteredProducts" 
      :key="product.id" class="product-item">
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

      <p v-else-if="filteredProducts.length === 0 && userSearch">{{
      `No products found, try again."${userSearch}"`}}</p>
      <p v-else-if="products.length === 0 && !error">Loading products...</p>
    </div>
</template>

<script lang="ts" setup>
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../assets/firebase';
import { ref, onMounted, computed, defineProps } from 'vue';

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
  const userSearch = ref('');


  const props = defineProps({
    filterCategory: {
      type: String,
      default: '',
    },
  });

  const filteredProducts = computed(() => {
    if (!props.filterCategory) {
      return products.value;
    }
    return products.value.filter((product) => product.category === props.filterCategory);
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
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
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
  width: 100%;
  height: 280px;
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

  </style>