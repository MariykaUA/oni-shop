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
          <div class="cta">
          <CtaButton />
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Countdown from './Countdown.vue'
import CtaButton from './buttons/CtaButton.vue'

interface Offer {
  title: string
  price: number
  image: string
  imageMobile?: string
}

const initialOfferData: Offer = {
  title: 'Super Flash SALE',
  price: 50,
  image: '/banner.svg',
  imageMobile: '/banner-mobile.svg',
};

const offerData = ref(initialOfferData);
const screenWidth = ref(0)

onMounted(() => {
    screenWidth.value = window.innerWidth;
});


const currentImage = computed(() => {
  if (screenWidth.value <= 576) {
    return offerData.value.imageMobile || offerData.value.image; 
  } else {
    return offerData.value.image; 
  }
});
</script>

<style lang="scss" scoped>
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
    left: 5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1; 
    pointer-events: auto; 
  }

  .cta {
    margin-top: 3rem;
  }

  .banner-text-title {
      font-size: 6rem;
      margin-bottom: 1rem;
      font-weight: $weight-light;
      color: $accent-color;
    }

  .banner-text-price {
      font-family: $font-secondary;
      font-size: 4rem;
      font-weight: $weight-regular;
      color: $accent-color;
      letter-spacing: 2px;
    }

 .banner {
    position: relative;
    margin-top: 4.5rem;
    filter: blur(0px);

    &:hover {
      filter: blur(0);
      transition: all 0.3s ease-in-out;
    }
  }

  // Mobile styles
  @include until("small") {
    .banner-text {
      left: 2rem;
      top: 35%;
    }

    .banner {
      margin-top: 0;
    }

    .banner-img {
      border-radius: 8px;
      margin-bottom: 5rem;
    }

    .countdown-overlay {
      display: flex;
      margin-top: 0.25rem;
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
