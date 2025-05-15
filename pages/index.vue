<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <HeroScreen />
      <TeaserBanner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HeroScreen from '../components/HeroScreen.vue';
import TeaserBanner from '../components/TeaserBanner.vue';
import Loading from '../components/Loading.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // 2 seconds delay
});
</script>