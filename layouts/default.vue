<template>
  <div>

    <header class="header">
      <Navigation />
    </header>

    <main>
      <NuxtPage />
    </main>

    <MobileBottomNavigation />

    <footer class="footer">
      <Footer />
    </footer>

  </div>
</template>

<script setup lang="ts">
  import Navigation from '../components/navigation/Navigation.vue';
  import MobileBottomNavigation from '../components/navigation/MobileBottomNavigation.vue';
  import Footer from '../components/Footer.vue';
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  flex-shrink: 0;
  height: 61px;
}

// Mobile styles
@include until('small') {
.header {
     height: 109px;
  }
}
</style>
