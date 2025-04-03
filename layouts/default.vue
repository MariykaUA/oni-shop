<template>
  <div>
    <header class="header">
      <nav class="nav">
        <button class="burger-menu-button" aria-label="Open menu" @click="toggleMenu">
          <div class="burger-bar"></div>
          <div class="burger-bar"></div>
          <div class="burger-bar"></div>
        </button>
        <div class="nav-overlay" :class="{ active: isMenuOpen }">
          <button class="exit-menu-button" aria-label="Close menu" @click="toggleMenu">
            <div class="exit-bar"></div>
            <div class="exit-bar"></div>
          </button>
          <ul class="navigation">
            <li><NuxtLink to="/" @click="toggleMenu"><img :src="'/logo.svg'" alt="On logo" class="logo-img"/></NuxtLink></li>
            <li><NuxtLink to="/plp" @click="toggleMenu">ALL</NuxtLink></li>
            <li><NuxtLink to="/shoes" @click="toggleMenu">SHOES</NuxtLink></li>
            <li><NuxtLink to="/accessoires" @click="toggleMenu">ACCESSOIRES</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="toggleMenu">CONTACT</NuxtLink></li>
          </ul>
        </div>
        <button class="search-container" aria-label="Search">
            <nuxt-img :src="SearchIcon" alt="Search icon" class="search-icon-input"/>
            <input type="text" placeholder="Search Product..." class="search-input"/>
        </button>
        <ul class="nav-icons">
          <li>
            <NuxtLink to="/cart">
              <nuxt-img :src="CartIcon" alt="Cart icon" class="cart-icon" />
            </NuxtLink>
          </li>
          <li><a to="/search"><nuxt-img :src="SearchIcon" alt="Search icon" class="search-icon"/></a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>FOOTER GOES HERE</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CartIcon from '@/assets/icons/cart.svg'
import SearchIcon from '@/assets/icons/search-icon.svg'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<style lang="scss">
@import '../assets/styles/breakpoints.scss';

.header {
  width: 100%;
  flex-shrink: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #d6d6d6 1px solid;
  box-shadow: 0 2px 4px rgba(108, 108, 108, 0.1);
}

.navigation {
  height: 60px;
  display: inline-flex;
  align-items: center;
  gap: 2rem;
}

.burger-menu-button {
  display: none;
  background: none;
  border: none;
  padding: 0;
}

.burger-bar {
  width: 32px;
  height: 2px;
  background-color: #151515;
  margin: 4px 0;
  transition: transform 0.3s ease-in-out;
}

.nav-icons {
  display: inline-flex;
  align-items: center;
  padding-right: 4rem;
}

.logo-img {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
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

.cart-icon {
  width: 75px;
  height: 51px;
  margin-right: 1rem;
  flex-shrink: 0;
}

.search-icon {
  width: 20.952px;
  height: 20.94px;
  flex-shrink: 0;
}

.search-container {
  display: none;
}

// Mobile styles
@include until("small") {
  
  .header {
    height: 48px;
  }

  .navigation {
    display: none;
  }

  .nav {
    width: 100%;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  .burger-menu-button {
    display: block;
    margin-left: 2rem;
  }

  .nav-icons {  
    padding: 0;
  }

  .search-icon { 
    display: none;
  }

  .cart-icon {
    margin-right: 1rem;  
    padding: 0;
  }

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

  .nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 21, 21);
    z-index: 10;
    display: none; /* Hide the overlay by default */
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  .nav-overlay.active {
    display: flex; /* Show the overlay when active */
  }

  .nav-overlay .navigation {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .nav-overlay .navigation a {
    color: rgb(239, 239, 239);
  }

  .nav-overlay .exit-menu-button {
    display: block;
  }

  .exit-bar {
  width: 32px;
  height: 3px;
  background-color: #f0f0f0;
  transition: transform 0.3s ease-in-out;
  }

  .exit-bar:nth-child(1) {
    transform: rotate(45deg);
  }

  .exit-bar:nth-child(2) {
    transform: rotate(-45deg);
  }
}
</style>