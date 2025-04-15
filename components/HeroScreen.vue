<template>
    <div class="banner">
        <nuxt-img :src="currentImage" alt="Banner image" class="banner-img"/>
        <div class="countdown-overlay">
          <div class="countdown-display">
            <span class="hours">{{ hours }}</span> :
            <span class="minutes">{{ minutes }}</span> :
            <span class="seconds">{{ seconds }}</span>
          </div>
        </div>
        <div class="banner-text">
          <h1 class="banner-text-title">{{ offerData.title }}</h1>
          <h2 class="banner-text-price">{{ offerData.price }}% Off</h2>
          <div class="button-wrapper">
          <NuxtLink to="/plp" class="hot-btn" >{{ offerData.buttonText }}</NuxtLink>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Offer {
  title: string
  price: number
  image: string
  imageMobile?: string
  buttonText: string
}

const initialOfferData: Offer = {
  title: 'Super Flash Sale',
  price: 50,
  image: './banner.svg',
  imageMobile: './banner-mobile.svg',
  buttonText: 'See more',
};

const offerData = ref(initialOfferData);

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

const currentImage = computed(() => {
  if (window.innerWidth <= 576) {
    return offerData.value.imageMobile || offerData.value.image; 
  } else {
    return offerData.value.image; 
  }
});

const targetDate = new Date('2025-04-25T12:00:00'); 
let countdownInterval;

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = targetDate.getTime() - now;

  if (difference <= 0) {
    // Countdown has ended
    clearInterval(countdownInterval);
    hours.value = '00';
    minutes.value = '00';
    seconds.value = '00';
    return;
  }

  const h = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const s = Math.floor((difference % (1000 * 60)) / 1000);

  hours.value = h.toString().padStart(2, '0');
  minutes.value = m.toString().padStart(2, '0');
  seconds.value = s.toString().padStart(2, '0');
};

onMounted(() => {
  // Initial call to prevent delay
  updateCountdown();

  // Update the countdown every second
  countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  // Clear the interval when the component unmounts
  clearInterval(countdownInterval);
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/breakpoints.scss';

  .banner-img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: none;
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

  .hours,
  .minutes,
  .seconds {
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.71);
    padding: 0.6rem; 
    color: rgb(28, 28, 28);
    border-radius: 8px; 
  }

  .banner-text {
    color: rgb(228, 228, 228);
    left: 5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2; 
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
 
  .hot-btn {
    color: #f4f4f4;
    background-color: #3c1717;
    border-radius: 8px;
    padding: 0.8rem 2rem;
    font-size: 1.5rem;
    z-index: 3; // Ensure button is on top
    cursor: pointer; // ensure the cursor is a pointer.
    pointer-events: auto; // make it interact with the mouse.

    &:hover {
      background-color: #131313;
    }
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
      margin-top: 0.5rem;
    }

    .banner-text-title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .banner-text-price {
      font-size: 1.25rem;
    }

    .hot-btn {
      display: none;
    }

  }
</style>
