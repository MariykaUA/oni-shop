<template>
    <nav class="nav" aria-label="Main navigation">
        <button class="burger-menu-button" 
        aria-label="Open menu" 
        @click="toggleMenu">
          <nuxt-img :src="MenuIcon" alt="Menu icon" />
        </button>
        <div class="nav-overlay" 
        :class="{ active: isMenuOpen }">
          <button class="exit-menu-button" 
          aria-label="Close menu" 
          @click="toggleMenu">
            <nuxt-img :src="ExitIcon" alt="Exit icon" />
          </button>
          <NavList @click="toggleMenu" />
        </div>
        <Search />
        <NavIcons />
      </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavList from './NavList.vue';
import Search from '../Search.vue';
import MenuIcon from '../../assets/icons/menu.svg';
import ExitIcon from '../../assets/icons/exit.svg';
import NavIcons from './NavIcons.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/breakpoints.scss';
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #d6d6d6 1px solid;
    box-shadow: 0 2px 4px rgba(108, 108, 108, 0.1);
    height: 60px;
  }

.burger-menu-button {
    display: none;
    background: none;
    border: none;
    padding: 0;
  }

.exit-menu-button {
    display: none;
    background: none;
    border: none;
    width: 32px;
    height: 32px;
    padding: 0;
    position: absolute;
    top: 2.5rem;
    right: 6.5rem;
}

@include until('small') {
.navigation {
    display: none;
}

.nav {
    width: 100%;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    position: fixed;
    z-index: 2;
    background-color: #f5f5f5;
}
  
.burger-menu-button {
    display: block;
    margin-left: 2rem;
}

.nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 21, 21);
    z-index: 1000;
    display: none; /* Hide the overlay by default */
    opacity: 0;
    visibility: hidden;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}
  
.nav-overlay.active {
    display: flex; /* Show the overlay when active */
    opacity: 1;
    visibility: visible;
}
  
.nav-overlay .navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
}
  
.nav-overlay .exit-menu-button {
    display: block;
} 
}
</style>
