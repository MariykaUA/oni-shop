<template>
  <div>
    <header>
      <nav>
        <ul class="navigation">
          <li><NuxtLink to="/"><img :src="'./logo.svg'" alt="On logo" class="logo-img"/></NuxtLink></li>
          <li><NuxtLink to="/shoes">SHOES</NuxtLink></li>
          <li><NuxtLink to="/accessoires">ACCESSOIRES</NuxtLink></li>
          <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
          <li class="nav-icons">
            <NuxtLink to="/cart">
              <nuxt-img src="./assets/icons/cart.svg" alt="Cart icon" class="cart-icon" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>footer</p>
    </footer>
  </div>
</template>

<style lang="scss">
header {
  width: 100vh;
  height: 70px;
  flex-shrink: 0;
}

.navigation {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.logo-img {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}
</style>