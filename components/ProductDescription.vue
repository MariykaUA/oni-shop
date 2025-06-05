<template>
    <h2 class="title">Description</h2>
    <div v-if="product" class="product-container">
        <p class="description">{{ product.description }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../assets/firebase'
import type { Product } from './ProductList.vue'

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
.title {
    font-size: 2rem;
    color: $primary-color;
    margin-top: 0.3rem;
    font-family: $font-secondary;
}

.description {
    margin-top: 1.5rem;
    width: 320px;
    font-weight: $weight-light;
    padding-left: 2px;
    font-size: 1.2rem;
    line-height: 1.6;
    letter-spacing: 0.5px;
}
</style>