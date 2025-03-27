<template>
    <div>
      <nuxt-img :src="offerData.image" alt="Banner image" class="banner-img"/>
      <div class="banner-text">
        <h1>{{ offerData.title }}</h1>
        <h2>{{ offerData.price }}% Off</h2>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Offer {
  title: string
  price: number
  image: string
}

const offerData: Ref<Offer> = ref({
  title: 'Super Flash Sale',
  price: 50,
  image: './banner.svg'
})

</script>

<style lang="scss">
  .banner-img {
    width: 100%;
    height: auto;
    margin-top: 2rem;
  }

  .banner-text {
    color: rgb(254, 254, 254);
    position: absolute;
    top: 45%;
    left: 5rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2.25rem;
    }
  }

</style>
