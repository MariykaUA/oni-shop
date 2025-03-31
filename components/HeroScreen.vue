<template>
    <div>
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
  }

  .banner-text {
    color: rgb(254, 254, 254);
    position: absolute;
    top: 45%;
    left: 5rem;
    pointer-events: none;
  }

  .banner-text-title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

  .banner-text-price {
      font-size: 2.25rem;
    }
</style>
