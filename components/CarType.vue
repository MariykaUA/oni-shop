<template>
    <div>
        <div class="carType" v-for="carType in carTypes" :key="carType.id">
            <img :src="carType.imgSrc" alt="Car Type Icon" :key="carType.id"/>
            <h2>{{ carType.name }}</h2>
            <p>{{ carType.description }}</p>
            <button v-if="carType.buttonText">{{ carType.buttonText }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
                imgSrc: '../assets/icon-sedans.svg',
                name: 'Sedans',
                description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
                buttonText: 'Learn More',
            },
            {
                id: 2,
                imgSrc: '../assets/icon-suvs.svg',
                name: 'SUVs',
                description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
                buttonText: 'Learn More',
            },
            {
                id: 3,
                imgSrc: '../assets/icon-luxury.svg',
                name: 'Luxury',
                description: 'Cruise  in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
                buttonText: 'Learn More',
            },
        ]);

        return {
            carTypes,
            addCarType: (carType: CarType) => {
                carTypes.value.push(carType);
            },
        };
    },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
    button {
        all: unset;
        background-color:  hsl(0, 0%, 95%);
        color: hsl(31, 77%, 52%);        
        cursor: pointer;
        padding: 12px 24px;
        border-radius: 2rem;
        text-align: center;
        width: 6rem;
        
    }
    .carType {
        background-color: hsl(31, 77%, 52%);
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }
    h2 {
        color: hsl(0, 0%, 95%);
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 700;
        margin: 0;
        margin-bottom: 1rem;
        padding: 0;
    }
    img {
        color: hsl(0, 0%, 95%);
        margin-bottom: 1rem;
    }
    p {
        color: hsla(0, 0%, 100%, 0.75);
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 1.5rem;
        padding: 0;
    }
    
</style>