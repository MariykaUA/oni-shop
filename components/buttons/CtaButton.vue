<template>
    <NuxtLink 
          :to="buttonLink" 
          class="cta" >
        {{ buttonText }}
    </NuxtLink>     
</template>

<script setup lang="ts">
import { ref } from 'vue'
 interface CtaButton {
  buttonText: string
  buttonLink: string
}

const initialCtaButton = {
  buttonText: 'See more',
  buttonLink: '/plp',
};

const buttonText = ref(initialCtaButton.buttonText);
const buttonLink = ref(initialCtaButton.buttonLink);
</script>

<style lang="scss" scoped>
.cta {
    color: #f4f4f4;
    background-color: #272626;
    border-radius: 8px;
    padding: 0.8rem 2rem;
    font-size: 1.5rem;
    z-index: 3; // Ensure button is on top
    cursor: pointer; // ensure the cursor is a pointer.
    pointer-events: auto; // make it interact with the mouse.

    &:hover {
      background-color: #5b5959;
    }
  }
</style>