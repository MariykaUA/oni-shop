<template>
    <div class="carTypes">
        <div class="carType" v-for="carType in carTypes" 
        :key="carType.id" 
        :style="{ backgroundColor: getColor(carType.id - 1) }">
            <img :src="carType.imgSrc" alt="Car Type Icon"/>
            <h2>{{ carType.name }}</h2>
            <p>{{ carType.description }}</p>
            <button v-if="carType.buttonText"
            :style="{color: getColor(carType.id - 1) }">{{ carType.buttonText }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import iconSedans from '../assets/icon-sedans.svg';
import iconSuvs from '../assets/icon-suvs.svg';
import iconLuxury from '../assets/icon-luxury.svg';

interface CarType {
    id: number;
    imgSrc: string;
    name: string;
    description: string;
    buttonText?: string;
}

export default defineComponent({
    setup() {
        const carTypes = ref<CarType[]>([
            {
                id: 1,
                imgSrc: iconSedans,
                name: 'Sedans',
                description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
                buttonText: 'Learn More',
            },
            {
                id: 2,
                imgSrc: iconSuvs,
                name: 'SUVs',
                description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
                buttonText: 'Learn More',
            },
            {
                id: 3,
                imgSrc: iconLuxury,
                name: 'Luxury',
                description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
                buttonText: 'Learn More',
            },
        ]);

    const colors = ['hsl(31, 77%, 52%)', 'hsl(184, 100%, 22%)', 'hsl(179, 100%, 13%)'];

    const getColor = (index: number): string => {
      return colors[index % colors.length];
    };

    const addCarType = (carType: CarType) => {
      carTypes.value.push(carType);
    };

    return {
      carTypes,
      addCarType,
      getColor,  
    };
    },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
$mobile-screen: 375px;
$desktop-screen: 1440px;

    button {
        all: unset;
        background-color:  hsl(0, 0%, 95%);       
        cursor: pointer;
        padding: 12px 18px;
        border-radius: 2rem;
        text-align: center;
        width: 6rem;
        
    }
    div .carTypes {
        @media (max-width: $mobile-screen) {
            display: flex;
            flex-direction: column;
            margin: 4rem 2rem;
        }
        @media (min-width: $mobile-screen) {
            display: flex;
            justify-content: center;
            margin: 8rem 10rem;
        }
    }
    .carType {
        background-color: hsl(31, 77%, 52%);
        display: flex;
        flex-direction: column;
        padding: 2rem;

        @media (min-width: $mobile-screen) {
           min-width: 16rem;
           max-width: 18rem;
        }
    }
    h2 {
        color: hsl(0, 0%, 95%);
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 700;
        margin: 0;
        margin-bottom: 2rem;
        padding: 0;
    }
    img {
        color: hsl(0, 0%, 95%);
        margin-bottom: 2rem;
        width: 4rem;
    }
    p {
        color: hsla(0, 0%, 100%, 0.75);
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 170%;
        margin: 0;
        margin-bottom: 2rem;
        padding: 0;
        width: 85%;

        @media (min-width: $mobile-screen) {
            margin-bottom: 3rem;
        }
    }
    
</style>