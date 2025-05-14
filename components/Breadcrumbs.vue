<template>
    <div class="breadcrumbs">
        <NuxtLink to="/" class="link" active-class="active">Home</NuxtLink>
        <span class="breadcrumbs-separator">/</span>
        <NuxtLink to="/plp" class="link" active-class="active">Products</NuxtLink>
    </div>
</template>

<style scoped lang="scss">

.breadcrumbs {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 14px 0;
    color: $primary-color;
    background-color: $accent-color;
    margin-top: 2rem;
    margin-bottom: 6rem;

    &-separator {
        margin: 0 5px;
    }
}

.link {
    color: $primary-color;
    font-weight: $weight-regular;
    text-decoration: none;

    &:hover {
        color: $grey;
    }
}

// Mobile styles
@include until("small") {
    .breadcrumbs {
        display: none;
    }
}
</style>