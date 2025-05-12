<template>
    <ul class="navigation">
        <li>
            <NuxtLink class="navlink" to="/">
                <nuxt-img 
                :src="'/logo.svg'" 
                alt="On logo" 
                class="logo-img" />
            </NuxtLink>
        </li>
        <li><NuxtLink class="navlink" to="/plp" active-class="active">ALL</NuxtLink></li>
        <li><NuxtLink class="navlink" to="/shoes" active-class="active">SHOES</NuxtLink></li>
        <li><NuxtLink class="navlink" to="/accessoires" active-class="active">ACCESSOIRES</NuxtLink></li>
        <li><NuxtLink class="navlink" to="/contact" active-class="active">CONTACT</NuxtLink></li>
      </ul>
</template>

<style lang="scss" scoped>

.navigation {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
}

.navlink {
    color: $primary-color;
    font-weight: $weight-regular;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
        color: $secondary-color;
    }

    &.active {
        color: $secondary-color;
    }
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