<template>
    <div class="sizes">
        <h3 class="title">Size:</h3>

        <div class="select">
            <button @click="showSizes" class="select-btn">
                <p class="btn-text">{{ selectedSize || 'Select' }}</p>
                <DownArrowButton />
            </button>
            <div class="size-list" v-show="isVisible">
                <ul>
                    <li v-for="size in sizes" 
                    :key="size" 
                    class="item-size"
                    @click="selectSize(size)">
                        {{ size }}
                    </li>
                    <li>
                        <button @click="clearSelection" class="clear-btn">
                            Remove size
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DownArrowButton from './buttons/DownArrowButton.vue';

const isVisible = ref(false);
const selectedSize = ref<string | null>(null);

const selectSize = (size: string) => {
    selectedSize.value = size;
    isVisible.value = false; // Hide the dropdown after selection
};

const clearSelection = () => {
    selectedSize.value = null;
    isVisible.value = false;
};

const showSizes = () => {
    isVisible.value = !isVisible.value;};

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

</script>

<style lang="scss" scoped>
.title {
    font-size: 1.5rem;
    font-family: $font-secondary;
}

.select-btn {
    display: inline-flex;
    border: $grey 1px solid;
    width: fit-content;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: $accent-color;
    }
}

.btn-text {
    font-size: 1rem;
    font-weight: $weight-normal;
    letter-spacing: 1px;
}

.sizes {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.7rem;
}

.select {
    display: inline-block;
    position: relative;
}

.item-size {
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: $weight-normal;
    letter-spacing: 1px;
    border: 1px solid $grey;
    margin-bottom: 10px;
    border-radius: 4px;
    display: block;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: $white;

    &:hover {
        background-color: $accent-color;
    }
}

.size-list {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0.5rem; 
    min-width: 100%; 
    border: 1px solid $grey;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(5, 28, 51, 0.1);
    padding: 1rem 2rem;
    background-color: $white;
}

.clear-btn {
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    color: $primary-color;
    font-weight: $weight-normal;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
    }
}

@include until('small') {
    .title {
        font-size: 1.25rem;
    }

    .item-size {
        font-size: 0.875rem;
    }

    .clear-btn {
        font-size: 0.875rem;
    }

    .sizes {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>