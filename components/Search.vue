<template>
    <div 
      class="search-container" 
      aria-label="Search">
      
      <SearchIcon
        alt="Search icon" 
        class="search-icon-input"/>
      <div class="search-wrapper">
        <input
        type="text" 
        placeholder="Search Product..." 
        class="search-input" 
        :value="userInput"
        @input="handleInputChange"
        @keydown.enter="handleSearch"/>

        <SearchButton class="search-btn" @click="handleSearch" />
      </div>
    </div>
</template>

<script setup lang="ts">
import SearchIcon from '~/components/icons/SearchIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useSearch } from '~/composables/useSearch'
import SearchButton from './buttons/SearchButton.vue';

const userInput = ref<string>('')
const router = useRouter()

const emit = defineEmits<(e: 'searchComplete') => void>()

const { setSearch } = useSearch() 

const handleInputChange = (event: Event): void => {
  const target = event.target as HTMLInputElement
  userInput.value = target.value
}

const handleSearch = (): void => {
  const query = userInput.value.trim()
  if (query) {
    
    router.push({
      path: '/plp',
      query: { search: query }
    }).then(() => {
      // Update the composable’s state
      setSearch(query)

      emit('searchComplete')
    })
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
} 

.search-input {
    width: 20rem;
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 4px solid $accent-dark-color;
    font-size: 16px;
    font-weight: $weight-regular;
    box-sizing: border-box;
  
    &:focus {
      outline: 1px solid $accent-color;
      border: 4px solid $secondary-color;
  }
}

.search-icon-input {
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
    width: 100%;
    padding: 0.6rem 2rem;
    border-radius: 4px;
    border: 1px solid $secondary-color;
    font-size: 12px;
    font-weight: $weight-regular;
    transition: border-color 0.3s ease-in-out;
    box-sizing: border-box;

    &:focus {
      outline: 1px solid $accent-color;
      border: 2px solid $secondary-color;
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

.search-btn {
display: none;
}
}
</style>