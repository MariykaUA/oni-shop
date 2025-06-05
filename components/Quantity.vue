<template>
    <div class="quantity-container">
        <h3 class="title">Quantity:</h3>
        <div class="quantity-wrapper">
            
            <input type="number" 
            v-model.number="quantity" 
            class="quantity-input" 
            min="1" 
            max="30" 
            :readonly="true" />

            <div class="arrows">
                <IncreaseButton @click="increase" />
                <DecreaseButton @click="decrease" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IncreaseButton from './buttons/IncreaseButton.vue';
import DecreaseButton from './buttons/DecreaseButton.vue';

const quantity = ref(1);
const maxQuantity = 30;
const minQuantity = 1;

const increase = () => {
  if (quantity.value < maxQuantity) {
    quantity.value++;
  }
};

const decrease = () => {
  if (quantity.value > minQuantity) {
    quantity.value--;
  }
};

const props = defineProps<{
  initialQuantity?: number
}>();

if (props.initialQuantity) {
  quantity.value = props.initialQuantity;
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 1.5rem;
    font-family: $font-secondary;
}

.quantity-container {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
}

.quantity-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
}

.quantity-input {
    padding: 0.5rem;
    border: 1px solid $grey;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-weight: $weight-normal;
    letter-spacing: 1px;

     /* --- REMOVE DEFAULT ARROWS (SPINNERS) --- */
     appearance: textfield; /* Standard property for compatibility */
     -moz-appearance: textfield; /* For Firefox */
     &::-webkit-outer-spin-button, /* For Chrome, Safari, Edge */
     &::-webkit-inner-spin-button { /* For Chrome, Safari, Edge */
         -webkit-appearance: none;
         margin: 0
    }

    &:read-only {
     cursor: default;
    }

    &:focus {
        outline: none;    
    }
}

.arrows {
    display: flex;
    flex-direction: column;
}
</style>