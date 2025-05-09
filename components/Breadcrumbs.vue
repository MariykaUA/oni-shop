<template>
    <div class="breadcrumbs">
        <NuxtLink to="/" class="breadcrumbs-link">Home</NuxtLink>
        <span class="breadcrumbs-separator">/</span>
        <NuxtLink to="/plp" class="breadcrumbs-link">Products</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">

.breadcrumbs {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 14px 0;
    color: #2b2b2b;
    background-color: #e2e2e262;
    margin-top: 2rem;
    margin-bottom: 6rem;

    &-link {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: rgb(0, 29, 157);
        }
    }

    &-separator {
        margin: 0 5px;
    }
}

// Mobile styles
@include until("small") {
    .breadcrumbs {
        display: none;
    }
}
</style>