<template>
    <button class="search-container" aria-label="Search">
        <nuxt-img :src="SearchIcon" alt="Search icon" class="search-icon-input" />
        <input type="text" placeholder="Search Product..." class="search-input" />
      </button>
</template>

<script setup lang="ts">
import SearchIcon from '../assets/icons/search-icon.svg';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/breakpoints.scss';

.search-container {
    display: none;
}

@include until('small') {
.search-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
}
  
.search-input {
    flex-grow: 1;
    padding: 0.6rem 2rem;
    border-radius: 4px;
    border: 1px solid #252525;
    font-size: 12px;
    font-weight: 400;
    transition: border-color 0.3s ease-in-out;
    box-sizing: border-box;
  
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(12, 28, 59, 0.2);
    }
}
  
.search-icon-input {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    }
}
</style>