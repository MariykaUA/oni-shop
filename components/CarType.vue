<template>
    <div>
        <div v-for="carType in carTypes" :key="carType.id">
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
                description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
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

</style>