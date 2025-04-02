<template>
  <div>
    <header class="header">
      <nav class="nav">
        <ul class="navigation">
          <li><NuxtLink to="/"><img :src="'/logo.svg'" alt="On logo" class="logo-img"/></NuxtLink></li>
          <li><NuxtLink to="/plp">ALL</NuxtLink></li>
          <li><NuxtLink to="/shoes">SHOES</NuxtLink></li>
          <li><NuxtLink to="/accessoires">ACCESSOIRES</NuxtLink></li>
          <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
        </ul>
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
import CartIcon from '@/assets/icons/cart.svg'
import SearchIcon from '@/assets/icons/search-icon.svg'

</script>

<style lang="scss">
@import '../assets/styles/breakpoints.scss';

.header {
  width: 100%;
  height: 64px;
  flex-shrink: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
}

.nav-icons {
  display: inline-flex;
  align-items: center;
  padding-right: 6rem;
}

.logo-img {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
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

// Mobile styles
@include until("small") {
  
  .header {
    height: 48px;
  }

  .navigation {
    display: none;
  }

  .nav {
    justify-content: flex-end;
  }

  .nav-icons {  
    padding: 0;
  }

  .search-icon { 
    display: none;
  }

  .cart-icon {
    padding-right: 1rem;
    margin: 0;
  }
}
</style>