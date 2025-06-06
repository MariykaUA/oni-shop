<template>
    <button>Add to Cart</button>
</template>

<style lang="scss" scoped>
button {
    background-color: $primary-color;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: $weight-light;
    letter-spacing: 1px;

    &:hover {
        background-color: darken($primary-color, 10%);
    }
}

@include until('small') {
    button {
        padding: 0.75rem 5.5rem;
    }
}
</style>