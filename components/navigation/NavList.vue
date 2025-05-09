<template>
    <ul class="navigation">
        <li>
            <NuxtLink to="/">
                <nuxt-img :src="'/logo.svg'" alt="On logo" class="logo-img" />
            </NuxtLink>
        </li>
        <li><NuxtLink to="/plp">ALL</NuxtLink></li>
        <li><NuxtLink to="/shoes">SHOES</NuxtLink></li>
        <li><NuxtLink to="/accessoires">ACCESSOIRES</NuxtLink></li>
        <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
      </ul>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.navigation {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
}

.logo-img {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
}

@include until('small') {
.navigation a{
    color: rgb(239, 239, 239);
    }
}  
</style>