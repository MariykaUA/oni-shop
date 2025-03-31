<template>
    <div>
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" :alt="product.name" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}</p>
        <p v-if="product.inStock">In stock</p>
        <p v-else>Out of stock</p>
      </div>
      <p v-if="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { collection, getDocs } from 'firebase/firestore'; 
  import { db } from '~/assets/firebase';
  import { ref, onMounted} from 'vue';
  
  interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    inStock: boolean;
  }
  
  const products = ref<Product[]>([]);const error = ref(false);
  const errorMessage = ref('');

  onMounted(async () => {
    error.value = false; 

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
  
  <style lang="sass" scoped>
  </style>