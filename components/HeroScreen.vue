<template>
    <div class="banner">
        <nuxt-img :src="offerData.image" alt="Banner image" class="banner-img"/>
        <div class="banner-text">
          <h1 class="banner-text-title">{{ offerData.title }}</h1>
          <h2 class="banner-text-price">{{ offerData.price }}% Off</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Offer {
  title: string
  price: number
  image: string
}

const initialOfferData: Offer = {
  title: 'Super Flash Sale',
  price: 50,
  image: './banner.svg'
};

const offerData = ref(initialOfferData);
</script>

<style lang="scss" scoped>
  .banner-img {
    width: 100%;
    height: auto;
    margin-top: 2rem;
    display: block;
  }

  .banner-text {
    color: rgb(228, 228, 228);
    left: 5rem;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1; 
  }

  .banner-text-title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

  .banner-text-price {
      font-size: 2.25rem;
    }

 .banner {
    position: relative;
  }
</style>
