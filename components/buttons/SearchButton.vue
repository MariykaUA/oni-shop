<template>
    <NuxtLink 
          :to="buttonLink" 
          class="search-button" >
        {{ buttonText }}
    </NuxtLink>     
</template>

<script setup lang="ts">
import { ref } from 'vue'

 interface SearchButton {
  buttonText: string
  buttonLink: string
}

const SearchButton = {
  buttonText: 'Search',
  buttonLink: '/plp',
};

const buttonText = ref(SearchButton.buttonText);
const buttonLink = ref(SearchButton.buttonLink);
</script>

<style lang="scss" scoped>
.search-button {
    margin-top: 2rem;
    color: #e6e6e6;
    background-color: #0214d5;
    border-radius: 8px;
    padding: 0.8rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #5b5959;
    }
  }
</style>