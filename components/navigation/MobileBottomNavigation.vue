<template>
    <nav class="mobile-bottom-nav" aria-label="Mobile bottom navigation">
      <ul class="mobile-nav">
        <li class="bottom-nav-items">
          <NuxtLink to="/" class="bottom-nav-item">
            <HomeIcon alt="Home icon" class="home-icon-bottom" />
            <span class="nav-text-bottom">Home</span>
          </NuxtLink>
        </li>
        <li>
          <button class="search-icon-bottom" aria-label="Search">
            <SearchIcon alt="Search icon" class="search-icon-bottom" />
          </button>
        </li>
        <li class="bottom-nav-items">
          <NuxtLink to="/cart" class="bottom-nav-item">
            <CartIcon alt="Cart icon" class="nav-icon-bottom" />
            <span class="nav-text-bottom">Cart</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
</template>

<script setup lang="ts">
import HomeIcon from '~/components/icons/HomeIcon.vue';
import CartIcon from '~/components/icons/CartIcon.vue';
import SearchIcon from '~/components/icons/SearchIcon.vue';
</script>

<style lang="scss" scoped>

.mobile-bottom-nav {
    display: none;
}

@include until('small') {
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
    color: $primary-color;
}

.search-icon-bottom {
    width: 32px;
    height: 32px;
    color: $primary-color;
}

.nav-text-bottom {
    font-size: 0.8rem;
    color: $primary-color;
    margin-top: 0.25rem;
  }
}
</style>