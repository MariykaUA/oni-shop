<template>
  <div>
    <header>
      <nav class="navigation">
        <NuxtLink to="/"><img :src="'./logo.svg'" alt="On logo" class="logo-img"/></NuxtLink>
        <NuxtLink to="/shoes">SHOES</NuxtLink>
        <NuxtLink to="/accessoires">ACCESSOIRES</NuxtLink>
        <NuxtLink to="/contact">CONTACT</NuxtLink>
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