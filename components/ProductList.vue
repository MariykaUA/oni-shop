<template>
    <div>
      <ProductReviews />
      <div v-for="Product in Products" :key="Product.id" class="product-item">
        <img :src="Product.image" :alt="Product.name" />
        <h2>{{ Product.name }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  import ProductReviews from './ProductReviews.vue';
  
  export default {
    components: {
      ProductReviews,
    },
    data() {
      return {
        Products: [],
      };
    },
    mounted() {
    this.fetchProduct();
    },
    methods: {
      //async fetchProducts from API
  },
  };
  </script>
  
  <style lang="sass" scoped>
  </style>