<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnnualPlan from '~/components/AnnualPlan.vue';
import Illustration from '~/assets/illustration-hero.svg';


interface OrderSummary {
    imgSrc: string,
    title: string,
    description: string,
}

export default defineComponent ({
    setup() {
        const OrderSummary = ref<OrderSummary>({
            imgSrc: Illustration,
            title: 'Order Summary',
            description: 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!',
        });

    return {
        OrderSummary,
        AnnualPlan,
    };
    }
});
</script>

<template>
    <div class="order-page">
        <div class="order-summary">
            <img :src="OrderSummary.imgSrc" alt="illustration">
            <div class="order-content">
                <h2>{{ OrderSummary.title }}</h2>
                <p>{{ OrderSummary.description }}</p>
                <AnnualPlan />
                <button class="btn-proceed"> Proceed to Payment</button>
                <button class="btn-cancel">Cancel Order</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

$mobile-screen: 375px;
$desktop-screen: 1440px;

.order-page {
    margin: 0;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    background-color: hsl(225, 100%, 94%)
}

.order-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsl(233, 26%, 24%);
    border-radius: 24px;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 16px;
    text-align: center;
    padding-top: 0;
    background-color: rgba(255, 255, 255, 0.877);
    width: 22rem;
    min-width: 22;
    overflow: hidden;

    h2 {
        margin-top: 0;
        color: hsl(223, 47%, 23%);
        font-size: 24px;
        font-weight: 900;
    }

    p {
        color: hsl(224, 23%, 55%);
        font-weight: 500;
        line-height: 1.5;
        margin: 0;
    }

    img {
        padding:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .btn-proceed {
        all: unset;
        background-color: hsl(245, 75%, 52%); 
        box-shadow: 0 15px 15px hsl(245, 75%, 52%, 0.2); 
        color: rgba(255, 255, 255, 0.925);
        border: none;
        border-radius: 8px;
        padding: 1rem 3.5rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            background-color: hsl(245, 51%, 55%)
        }
        
        @media (max-width: $mobile-screen) {
        font-size: 0.8rem;
      }
    }

    .btn-cancel {
        all: unset;
        color: hsl(224, 23%, 55%);
        border: none;
        margin-top: 1rem;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            color:hsl(223, 17%, 40%);
        }
    }

    .order-content {
        padding: 2rem;
    }
}
//Pale blue: hsl(225, 100%, 94%)
//Bright blue: hsl(245, 75%, 52%)
//Very pale blue: hsl(225, 100%, 98%)
//Desaturated blue: hsl(224, 23%, 55%)
//Dark blue: hsl(223, 47%, 23%)

</style>