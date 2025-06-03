<template>
    <div class="filter">
        <div class="types">
          <h3 class="headline">filter</h3>
          <ul class="types-list">
            <li v-for="type in types"
            :key="type"
            :class="{ active: selectedType === type }"
            @click="selectType(type)">
          {{ type }}
        </li>
          </ul>
        </div>
        <div class="price">
          <h3 class="price-title">Prices</h3>
          <PriceRangeSlider
          @update:minPrice="minPrice = $event"
          @update:maxPrice="maxPrice = $event" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import PriceRangeSlider from './PriceRangeSlider.vue'

const types = ['All', 'Shoes', 'Apparel', 'Accessoires']
const selectedType = ref('All')

const minPrice = ref(0)
const maxPrice = ref(600)

const emit = defineEmits(['update:category', 'update:minPrice', 'update:maxPrice'])

const selectType = (type: string) => {
  selectedType.value = type
  emit('update:category', type === 'All' ? '' : type.toLowerCase())
}

// Emit default value 
onMounted(() => {
  emit('update:category', '')
})

watch(minPrice, (val) => emit('update:minPrice', val))
watch(maxPrice, (val) => emit('update:maxPrice', val))
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: $accent-color;  
  color: $primary-color;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.headline {
  font-family: $font-secondary;
  font-size: 2rem;
  font-variant: small-caps;
  letter-spacing: 2px;
  font-weight: $weight-regular;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  color: $primary-color;
  background-color: $accent-color;   
  border-radius: 4px;
}

.price-title {
  font-variant: small-caps;
  font-family: $font-secondary;
  font-size: 2rem;
}

.types-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.types-list li.active {
  text-decoration: underline;
  text-decoration-color: $primary-color;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}

@include until('small') {
.headline{
    display: none;
  }

.types {
    padding: 0;
    margin-bottom: 0;
    margin-top: 1rem;
    background-color: transparent;
  }

.types-list {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

.price {
    display: none;
  }

}
</style>