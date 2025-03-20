<script lang="ts">
import { defineComponent, ref } from 'vue';
import iconMusic from '../assets/icon-music.svg';

interface Plan {
    imgSrc: string,
    title: string,
    price: number,
    }

export default defineComponent({
    setup () {
const AnnualPlan = ref<Plan>({
    imgSrc: iconMusic,
    title: 'Annual Plan',
    price: 59.99,
});

        return {
            AnnualPlan,
        };
    },
});


</script>

<template>
    <div class="annual-plan">  
        <div class="plan-img-text">
            <img :src="AnnualPlan.imgSrc" alt="Annual Plan">
            <div>     
                <h3>{{ AnnualPlan.title }}</h3>
                <p>${{ AnnualPlan.price }}/year</p>
            </div>
        </div>
        <a href="">Change</a>
    </div>
 </template> 
 
<style lang="scss" scoped>
    $mobile-screen: 375px;
    $desktop-screen: 1440px;

    .annual-plan {
        background-color:hsl(225, 100%, 98%);   
        border-radius: 12px;
        display: flex;
        gap: 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;


        .plan-img-text {
            display: flex;
            text-align: left;
            align-items: center;
        }


        h3 {
            color: hsl(223, 47%, 23%);
            font-size: 16px;
            font-weight: 700;
            margin: 0;
            margin-bottom: 6px;

            @media (max-width: $mobile-screen) {
                font-size: 14px;
            }
        }

        p {
            color: hsl(224, 23%, 55%);
            font-size: 14px;
            font-weight: 500;
            margin: 0;
        }

        img {
            width: 3rem;
            padding: 1rem;
        }

        a {
            color: hsl(245, 75%, 52%);
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            padding: 1rem;
            cursor: pointer;

            &:hover {
                color: hsl(235, 43%, 41%);
                text-decoration: underline;
            }
        }
    }
</style>