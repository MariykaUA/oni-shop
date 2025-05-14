<template>
    <div class="slider">
        <div class="min-range">
            <label for="min-slider" class="slider-price">Min price: ${{ minValue }}</label>
            <input type="range" 
            class="min-range" 
            :min="minLimit" 
            :max="maxLimit" 
            v-model="minValue"
            @input="updateMinValue" />
        </div>
        
        <div class="max-range">
            <label for="max-slider" class="slider-price">Max price: ${{ maxValue }}</label>
            <input type="range" 
            class="min-range" 
            :min="minLimit" 
            :max="maxLimit" 
            v-model="maxValue"
            @input="updateMaxValue" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const minLimit = 0
const maxLimit = 600

const minValue = ref(0)
const maxValue = ref(600)

const emit = defineEmits(['update:minPrice', 'update:maxPrice'])

const updateMinValue = () => {
  if (minValue.value > maxValue.value) {
    minValue.value = maxValue.value
  }
  emit('update:minPrice', minValue.value)
}

const updateMaxValue = () => {
  if (maxValue.value < minValue.value) {
    maxValue.value = minValue.value
  }
  emit('update:maxPrice', maxValue.value)
}
</script>

<style lang="scss" scoped>
.slider {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 
    color: $primary-color;
}

.slider-price {
    font-size: 1.2rem;
    color: $primary-color;
    margin-top: 0.25rem;
    letter-spacing: 1px;
}

input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    background: lighten($primary-color, 40%);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    transition: background 0.3s ease;
}
  
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: $primary-color;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    transition: background 0.3s;
}
  
input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: $primary-color;
    border: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
</style>