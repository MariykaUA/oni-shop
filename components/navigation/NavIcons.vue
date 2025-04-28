<template>
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
</template>

<script setup lang="ts">
import CartIcon from '../../assets/icons/cart.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/breakpoints.scss';

.nav-icons {
    display: inline-flex;
    align-items: center;
    padding-right: 4rem;
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

@include until('small') {
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
}  
</style>