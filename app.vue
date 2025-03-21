<script setup>
</script>

<template>
  <header>
    <nav class="routes">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/car-types">Car types</NuxtLink>
      <NuxtLink to="/order-summary">Order summary</NuxtLink>
      <NuxtLink to="/price-grid">Price grid</NuxtLink>
    </nav>
  </header>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
$mobile-screen: 375px;
$desktop-screen: 1440px;

.routes {
  background-color: rgb(73, 97, 158);
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding:1rem;
  align-items: center;

  @media (max-width: $mobile-screen) {
     gap: 0.8rem;
  }

  a {
    text-decoration: none;
    color: rgb(242, 242, 242);
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.8rem;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px; 
    }

    &:focus {
      border: 1px solid rgb(242, 242, 242);
      border-radius: 8px;
      border-color: rgb(242, 242, 242);
    }

    @media (max-width: $mobile-screen) {
      font-size: 1rem;
    }
  }
}
</style>
