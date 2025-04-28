<template>
    <div class="banner">
        <nuxt-img 
        :src="currentImage" 
        alt="Banner image" 
        class="banner-img"/>
        <Countdown />
        <div class="banner-text">
          <h1 class="banner-text-title">{{ offerData.title }}</h1>
          <h2 class="banner-text-price">{{ offerData.price }}% Off</h2>
          <div class="button-wrapper">
          <CtaButton />
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Countdown from './Countdown.vue'
import CtaButton from './buttons/CtaButton.vue'

interface Offer {
  title: string
  price: number
  image: string
  imageMobile?: string
}

const initialOfferData: Offer = {
  title: 'Super Flash Sale',
  price: 50,
  image: './banner.svg',
  imageMobile: './banner-mobile.svg',
};

const offerData = ref(initialOfferData);

const currentImage = computed(() => {
  if (window.innerWidth <= 576) {
    return offerData.value.imageMobile || offerData.value.image; 
  } else {
    return offerData.value.image; 
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/breakpoints.scss';

  .banner-img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 0;
    margin-bottom: 15rem;
    z-index: 0; 
    pointer-events: none;
    }

  .countdown-overlay {
    position: absolute;
    top: 70%;
    transform: translateY(-50%);
    left: 1.98rem;
    color: rgba(255, 255, 255, 0.841);
    font-size: 1rem;
    z-index: 1; 
    display: none;
  }
  
  .banner-text {
    color: rgb(228, 228, 228);
    left: 5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1; 
    pointer-events: auto; 
  }

  .button-wrapper {
    margin-top: 3rem;
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

  // Mobile styles
  @include until("small") {
    .banner-text {
      left: 2rem;
      top: 35%;
    }

    .banner-img {
      border-radius: 8px;
      margin-bottom: 5rem;
    }

    .countdown-overlay {
      display: flex;
    }

    .banner-text-title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .banner-text-price {
      font-size: 1.25rem;
    }

    .cta {
      display: none;
    }

  }
</style>
