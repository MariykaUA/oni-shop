<template>
  <div class="pdp-wrapper">
    <div v-if="product" class="product-container">
        <img 
        class="product-image"
        :src="product.colors?.[0]?.image || product.image"
        :alt="product.name" />
            
        <div class="product-info">
            <h2 class="product-name">{{ product.name }}</h2>

            <div class="price-stock">
              <p class="price">{{ product.price }}$</p>
              <p v-if="product.inStock" 
              class="in-stock">In stock</p>
              <p v-else>Out of stock</p>
            </div>

            <div class="category">
              <h3 class="title">Category:</h3>
              <p class="text">{{ product.category }}</p>
            </div>

            <div class="colors"> 
              <p v-if="product.colors?.length" class="title">Available Colors:</p>
              <ul v-if="product.colors?.length" 
                  class="color-list">
                <li v-for="color in product.colors" 
                    :key="color.name"
                    class="item-color">
                      <img 
                      :src="color.image" 
                      :alt="color.name" 
                      class="img-color" />
                      {{ color.name }}
                </li>
              </ul>
            </div>

            <div class="actions">
              <AddToCartButton />
              <Wishlist />wish
              <button>Share</button>
            </div>

            <p class="shipping-msg">Free shipping on all orders over $60!</p>
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
import AddToCartButton from '../../components/buttons/AddToCartButton.vue'
import Wishlist from '../../components/icons/Wishlist.vue'

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
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;
    margin: 3rem 10rem;
}

.product-image {
    display: block;
    width: 300px;
    height: 400px;
    max-height: 400px;
    object-fit: cover;
    flex-shrink: 0;
    max-width: 400px;
}

.product-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.price {
  color: $price;
  font-size: 1.75rem;
}

.in-stock {
  color: $in-stock;
}

.price-stock {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  align-items: center;
}

.shipping-msg {
  font-size: 1rem;
  color: $grey;
}

.product-name {
  font-size: 2.5rem;
  font-weight: $weight-medium;
  font-family: $font-secondary;
}

.actions {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.colors {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.color-list {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
  padding: 0;
}

.item-color {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.img-color {
    display: block;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.category {
  display: flex;
  flex-direction: row;
  gap: 1.8rem;
  align-items: center;
}

.title {
  font-weight: $weight-medium;
  font-size: 1.5rem;
  font-family: $font-secondary;
}

.text {
  font-size: 1.25rem;
}
</style>