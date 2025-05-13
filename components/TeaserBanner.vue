<template>
    <div class="teaser-banner">
        <div class="teaser-banner-content">
            <h1 class="teaser-banner-title">{{ currentTitle }}</h1>
            <h2 class="teaser-banner-subtitle">{{ currentSubtitle }}</h2>
            <ShopNowButton />
        </div>
        <img 
        :src="teaserBannerData.image" 
        class="shoe-img" 
        alt="Shoe" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ShopNowButton from './buttons/ShopNowButton.vue'

interface TeaserBanner {
    title: string
    subtitle: string
    image: string
    imageMobile?: string
    titleMobile?: string
    subtitleMobile?: string
}


const initialTeaserBannerData: TeaserBanner = {
    title: 'Adidas LIGHT Sneakers',
    subtitle: 'Performance and design. Taken right to the edge.',
    image: './transparent-shoe.svg',
    titleMobile: 'Recommended Product',
    subtitleMobile: 'We recommend the best for you.',
};

const teaserBannerData = ref(initialTeaserBannerData);
const screenWidth = ref(0)

onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const currentTitle = computed(() => {
  return screenWidth.value <= 576 && teaserBannerData.value.titleMobile
    ? teaserBannerData.value.titleMobile
    : teaserBannerData.value.title;
});

const currentSubtitle = computed(() => {
  return screenWidth.value <= 576 && teaserBannerData.value.subtitleMobile
    ? teaserBannerData.value.subtitleMobile
    : teaserBannerData.value.subtitle;
});
</script>

<style lang="scss" scoped>
.teaser-banner {
    background-color: $primary-color;
    color: $accent-color;
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    align-items: center;
    margin: 0;
}

.teaser-banner-content {
    margin-left: 5rem;
    width: 50%;
}

.teaser-banner-title {
    font-family: $font-secondary;
    font-weight: $weight-light;
    font-size: 4rem;
    margin-bottom: 1rem;
}

.teaser-banner-subtitle {
    font-size: 1.25rem;
    font-weight: $weight-light;
    margin-bottom: 3rem;
}

.shoe-img {
    width: 40%;
    height: auto;
    margin-right: 3rem;
    position: relative;
    transform: translateY(-15%);
}

//Mobile styles
@include until("small") {
    .teaser-banner {
        width: auto;
        background-image: url('./teaser.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        flex-direction: column;
        height: auto;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2rem;
        border-radius: 8px; 

    }

    .teaser-banner-content {
        margin-left: 0;
        width: 100%;
    }

    .teaser-banner-title {
        font-size: 1.5rem;
        width: 100%;
        line-height: 160%;
    }

    .teaser-banner-subtitle {
        font-size: 1rem;
        margin-bottom: 2.5rem;
    }

    .shoe-img {
        display: none;
    }

    .shop-now {
        font-size: 0.8rem;
    }
}

</style>