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
    color: #f4f4f4;
    background-color: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 6px;      
        text-underline-offset: 12px;
    }
}
</style>