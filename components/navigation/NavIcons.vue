<template>
    <ul class="nav-icons">
        <li>
          <NuxtLink to="/cart">
            <CartIcon class="cart-icon" />
          </NuxtLink>
        </li>
        <li>
          <SearchIcon alt="Search icon" class="search-icon" 
          @click="toggleSearch"/>

          <div v-if="isSearchOpen">
            <div class="search-overlay" @click="toggleSearch"></div>
            <div class="search-modal">
              <h2 class="search-headline">What are you looking for?</h2>
              <Search @searchComplete="toggleSearch"/>
              <ExitIcon alt="Exit icon" @click="toggleSearch" class="exit-icon" />
            </div>    
          </div>
        </li>
      </ul>
</template>

<script setup lang="ts">
import CartIcon from '~/components/icons/CartIcon.vue'
import SearchIcon from '~/components/icons/SearchIcon.vue';
import { ref } from 'vue';
import ExitIcon from '~/components/icons/ExitIcon.vue';
import Search from '../Search.vue';

const isSearchOpen = ref(false);
function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
}
</script>

<style lang="scss" scoped>
.nav-icons {
    display: inline-flex;
    align-items: center;
    padding-right: 4rem;
}

.cart-icon {
    width: 30px;
    height: 30px;
    margin-right: 1.25rem;
    flex-shrink: 0;
    color: $primary-color;

    &:hover {
        color: $secondary-color;
    }
}

.exit-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: $white;
}

.search-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    color: $primary-color;
    cursor: pointer;

    &:hover {
      color: $secondary-color;
  }
}

.search-headline {
  color: $white;
  font-size: 2rem;
  font-weight: $weight-light;
  margin-bottom: 2rem;
}

.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 93, 93, 0.5);
  z-index: 2;
  display: flex;
}

.search-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 50%;
  transform: translate(-50%, -50%);
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(4, 10, 39, 0.25);
  z-index: 3;
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