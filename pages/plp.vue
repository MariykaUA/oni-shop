<template>
  <div>
    <TeaserBanner />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductList from '../components/ProductList.vue'
import TeaserBanner from '../components/TeaserBanner.vue'

export default defineComponent({
  components: {
    ProductList,
    TeaserBanner
  }
})
</script>
