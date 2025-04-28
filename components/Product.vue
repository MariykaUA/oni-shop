<template>
    <div v-if="product">
        <h1>{{ product.name }}</h1>
        <img 
        :src="product.img" 
        :alt="product.name" />
    </div>
    <div v-else>
        <h1>Product Not Found</h1>
        <p>Sorry, the product you are looking for could not be found.</p>
        <button>Back to Products</button>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';

 interface Product {
     name: string;
     img: string;
 }

 export default defineComponent({
    props: ['id'],
    data() {
        return {
            product: null as Product | null,
        };
    }
});
</script>