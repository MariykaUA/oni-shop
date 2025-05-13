<template>
    <NuxtLink 
          :to="buttonLink" 
          class="cta" >
        {{ buttonText }} &#8594
    </NuxtLink>     
</template>

<script setup lang="ts">
import { ref } from 'vue'
 interface CtaButton {
  buttonText: string
  buttonLink: string
}

const initialCtaButton = {
  buttonText: 'SEE MORE',
  buttonLink: '/plp',
};

const buttonText = ref(initialCtaButton.buttonText);
const buttonLink = ref(initialCtaButton.buttonLink);
</script>

<style lang="scss" scoped>
.cta {
    color: $white;
    font-size: 1.5rem;
    margin-left: 2px;
    z-index: 3; 
    cursor: pointer; 
    pointer-events: auto; 
    font-weight: $weight-regular;
    text-decoration: none;
    letter-spacing: 1.5px;
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