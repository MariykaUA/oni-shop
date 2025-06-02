<template>
  <div class="pdp-wrapper">
    <div v-if="product" class="product-container">
        <img 
        class="product-image"
        :src="product.colors?.[0]?.image || product.image"
        :alt="product.name" />
            
        <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p>Price: {{ product.price }}$</p>
            <p v-if="product.inStock">In stock</p>
            <p v-else>Out of stock</p>
            <p>Category: {{ product.category }}</p>
        </div>
    </div>

    <div v-else-if="!error">
        <p>Loading product details...</p>
    </div>

    <div v-else>
        <h1>Product Not Found</h1>
        <p>Sorry, the product you are looking for could not be found.</p>
        <button>Back to Products</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { db } from '../../assets/firebase'
import type { Product } from '../../components/ProductList.vue'

const error = ref(false)
const product = ref<Product | null>(null)
const route = useRoute()
const id = route.params.id as string

onMounted(async () => {
    try {
    const docRef = doc(db, 'products', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      product.value = { id: docSnap.id, ...docSnap.data() } as Product
    } else {
      error.value = true
    }
    }

    catch (e:unknown) {
      console.error('Error loading products', e);
      error.value = true;
    }
  });
</script>

<style lang="scss" scoped>
.product-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 3rem 0;
}

.product-image {
    max-width: 400px;
    height: auto;
}

.product-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</style>