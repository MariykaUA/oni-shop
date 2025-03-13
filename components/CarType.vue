<template>
    <div>
        <div v-for="carType in carTypes" :key="carType.id">
            <h2>{{ carType.name }}</h2>
            <p>{{ carType.description }}</p>
        </div>
    </div>
    <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface CarType {
    id: number;
    name: string;
    description: string;
}

export default defineComponent({
    setup() {
        const carTypes = ref<CarType[]>([
            {
                id: 1,
                name: 'Sedans',
                description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
            },
            {
                id: 2,
                name: 'SUVs',
                description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
            },
            {
                id: 3,
                name: 'Luxury',
                description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
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
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
</style>