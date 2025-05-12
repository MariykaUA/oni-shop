<template>
    <NuxtLink 
          :to="buttonLink" 
          class="shop-now" >
        {{ buttonText }}
    </NuxtLink>     
</template>

<script setup lang="ts">
import { ref } from 'vue'
 interface ShopButton {
  buttonText: string
  buttonLink: string
}

const initialShopButton = {
  buttonText: 'SHOP NOW',
  buttonLink: '/shoes',
};

const buttonText = ref(initialShopButton.buttonText);
const buttonLink = ref(initialShopButton.buttonLink);
</script>

<style lang="scss" scoped>
.shop-now {
    color: $white;
    background-color: none;
    font-size: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -12px; //offset
      height: 6px; //text-decoration-thickness
      width: 100%;
      background-color: $white; 
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }
  
    &:hover::after {
      transform: scaleX(1);
    }
}
</style>