<template>
    <div class="teaser-banner">
        <div class="teaser-banner-content">
            <h1 class="teaser-banner-title">{{ teaserBannerData.title }}</h1>
            <h2 class="teaser-banner-subtitle">{{ teaserBannerData.subtitle }}</h2>
            <button>{{ teaserBannerData.buttonText }}
            </button>
        </div>
        <img :src="teaserBannerData.image" class="shoe-img" alt="Shoe" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TeaserBanner {
    title: string
    subtitle: string
    image: string
    buttonText: string
}

const initialTeaserBannerData: TeaserBanner = {
    title: 'Adidas Men Running Sneakers',
    subtitle: 'Performance and design. Taken right to the edge.',
    buttonText: 'SHOP NOW',
    image: './transparent-shoe.svg'
};

const teaserBannerData = ref(initialTeaserBannerData);

</script>

<style lang="scss" scoped>
@import '../assets/styles/breakpoints.scss';

.teaser-banner {
    background-color: #1c1d1f;
    margin: 15rem 0;
    color: rgb(242, 242, 242);
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    align-items: center;

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
        width: fit-content;
        flex-direction: column;
        height: auto;
        gap: 2rem;
        margin: 8rem 0;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2rem;
    }

    .teaser-banner-content {
        margin-left: 0;
        width: 100%;
    }

    .teaser-banner-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .teaser-banner-subtitle {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .shoe-img {
        width: 50%;
        margin: 0;
        left: 25%;
    }

    button {
        font-size: 0.8rem;
    }
}

</style>