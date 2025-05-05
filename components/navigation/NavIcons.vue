<template>
    <ul class="nav-icons">
        <li>
          <NuxtLink to="/cart">
            <nuxt-img :src="CartIcon" alt="Cart icon" class="cart-icon" />
          </NuxtLink>
        </li>
        <li>
          <nuxt-img :src="SearchIcon" alt="Search icon" class="search-icon" 
          @click="toggleSearch"/>

          <div v-if="isSearchOpen">
            <div class="search-overlay" @toggle="toggleSearch"></div>
            <div class="search-modal">
              <h2 class="search-headline">What are you looking for?</h2>
              <input type="text" placeholder="Search Product..." />
              <nuxt-img :src="ExitIcon" alt="Exit icon" @click="toggleSearch" class="exit-icon" />
              <SearchButton />
            </div>    
          </div>

          <Search />
        </li>
      </ul>
</template>

<script setup lang="ts">
import CartIcon from '../../assets/icons/cart.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';
import Search from '../Search.vue';
import { ref } from 'vue';
import ExitIcon from '../../assets/icons/exit.svg';
import SearchButton from '../buttons/SearchButton.vue';

const isSearchOpen = ref(false);
function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
}
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

.exit-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}

.search-icon {
    width: 20.952px;
    height: 20.94px;
    flex-shrink: 0;
}

.search-headline {
  color: #d1d1d1;
  font-size: 2rem;
  font-weight: 600;
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
  background-color: rgb(8, 8, 8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(4, 10, 39, 0.25);
  z-index: 3;
}

.search-modal input {
  width: 60%;
  padding: 1rem 2rem;
  border-radius: 4px;
  border: 4px solid #464646;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid rgb(234, 234, 234);
    border: 4px solid #181343;
}
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