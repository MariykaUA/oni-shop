<template>
    <div class="teaser-banner">
        <div class="teaser-banner-content">
            <h1 class="teaser-banner-title">{{ currentTitle }}</h1>
            <h2 class="teaser-banner-subtitle">{{ currentSubtitle }}</h2>
            <button>{{ teaserBannerData.buttonText }}
            </button>
        </div>
        <img :src="teaserBannerData.image" class="shoe-img" alt="Shoe" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface TeaserBanner {
    title: string
    subtitle: string
    image: string
    buttonText: string
    imageMobile?: string
    titleMobile?: string
    subtitleMobile?: string
}


const initialTeaserBannerData: TeaserBanner = {
    title: 'Adidas Men Running Sneakers',
    subtitle: 'Performance and design. Taken right to the edge.',
    buttonText: 'SHOP NOW',
    image: './transparent-shoe.svg',
    titleMobile: 'Recommended Product',
    subtitleMobile: 'We recommend the best for you.',
};

const teaserBannerData = ref(initialTeaserBannerData);

const currentTitle = computed(() => {
  return window.innerWidth <= 576 && teaserBannerData.value.titleMobile
    ? teaserBannerData.value.titleMobile
    : teaserBannerData.value.title;
});

const currentSubtitle = computed(() => {
  return window.innerWidth <= 576 && teaserBannerData.value.subtitleMobile
    ? teaserBannerData.value.subtitleMobile
    : teaserBannerData.value.subtitle;
});


</script>

<style lang="scss" scoped>
@import '../assets/styles/breakpoints.scss';

.teaser-banner {
    background-color: #1c1d1f;
    color: rgb(242, 242, 242);
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    align-items: center;
    margin: 0;
}

.teaser-banner-content {
    margin-left: 5rem;
    width: 50%;
}

.teaser-banner-title {
    font-size: 2.25rem;
    margin-bottom: 0.6rem;
}

.teaser-banner-subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2.5rem;
}

.shoe-img {
    width: 40%;
    height: auto;
    margin-right: 5rem;
    position: relative;
    transform: translateY(-15%);
}

button {
    color: #f4f4f4;
    background-color: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 6px;      
        text-underline-offset: 12px;
    }
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
        margin-bottom: 1.5rem;
    }

    .teaser-banner-subtitle {
        font-size: 1rem;
        margin-bottom: 2.5rem;
    }

    .shoe-img {
        display: none;
    }

    button {
        font-size: 0.8rem;
    }
}

</style>