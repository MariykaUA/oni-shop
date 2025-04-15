<template>
  <div>
    <header class="header">
      <nav class="nav" aria-label="Main navigation">
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
            <li>
              <NuxtLink to="/" @click="toggleMenu"><img :src="'/logo.svg'" alt="On logo" class="logo-img" /></NuxtLink>
            </li>
            <li><NuxtLink to="/plp" @click="toggleMenu">ALL</NuxtLink></li>
            <li><NuxtLink to="/shoes" @click="toggleMenu">SHOES</NuxtLink></li>
            <li><NuxtLink to="/accessoires" @click="toggleMenu">ACCESSOIRES</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="toggleMenu">CONTACT</NuxtLink></li>
          </ul>
        </div>
        <button class="search-container" aria-label="Search">
          <nuxt-img :src="SearchIcon" alt="Search icon" class="search-icon-input" />
          <input type="text" placeholder="Search Product..." class="search-input" />
        </button>
        <ul class="nav-icons">
          <li>
            <NuxtLink to="/cart">
              <nuxt-img :src="CartIcon" alt="Cart icon" class="cart-icon" />
            </NuxtLink>
          </li>
          <li>
            <a to="/search"><nuxt-img :src="SearchIcon" alt="Search icon" class="search-icon" /></a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <nav class="mobile-bottom-nav" aria-label="Mobile bottom navigation">
      <ul class="mobile-nav">
        <li class="bottom-nav-items">
          <NuxtLink to="/" class="bottom-nav-item">
            <img :src="HomeIconBottom" alt="Home icon" class="nav-icon-bottom" />
            <span class="nav-text-bottom">Home</span>
          </NuxtLink>
        </li>
        <li>
          <button class="search-icon-bottom" aria-label="Search">
            <nuxt-img :src="SearchIconBottom" alt="Search icon" class="search-icon-bottom" />
          </button>
        </li>
        <li class="bottom-nav-items">
          <NuxtLink to="/cart" class="bottom-nav-item">
            <img :src="CartIconBottom" alt="Cart icon" class="nav-icon-bottom" />
            <span class="nav-text-bottom">Cart</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <footer class="footer">
      <p>FOOTER GOES HERE</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import CartIcon from '@/assets/icons/cart.svg';
  import SearchIcon from '@/assets/icons/search-icon.svg';
  import HomeIconBottom from '@/assets/icons/home.svg';
  import CartIconBottom from '@/assets/icons/cart-bottom.svg';
  import SearchIconBottom from '@/assets/icons/search-bottom.svg';

  const isMenuOpen = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style lang="scss">
  @import '../assets/styles/breakpoints.scss';

  .header {
    width: 100%;
    flex-shrink: 0;
    height: 61px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #d6d6d6 1px solid;
    box-shadow: 0 2px 4px rgba(108, 108, 108, 0.1);
    height: 60px;
  }

  .navigation {
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
    width: 32px;
    height: 32px;
    margin-right: 2rem;
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

  .mobile-bottom-nav {
    display: none;
  }

  // Mobile styles
  @include until('small') {
    .navigation {
      display: none;
    }

    .header {
      height: 109px;
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
      z-index: 100;
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

    .mobile-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
    }

    .mobile-bottom-nav {
      display: flex;
      width: fit-content;
      background-color: #f5f5f5;
      border-top: 1px solid #d6d6d6;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10;
    }

    .bottom-nav-item {
      display: flex;
      padding: 1rem 2.5rem;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .search-icon-bottom {
      width: 36px;
      height: 36px;
    }

    .nav-text-bottom {
      font-size: 0.8rem;
      color: #616161;
      margin-top: 0.25rem;
    }
  }
</style>
