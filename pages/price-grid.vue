<script lang="ts">
import { defineComponent } from 'vue';
import MonthlySubscription from '~/components/MonthlySubscription.vue';
import WhyUs from '~/components/WhyUs.vue';

interface PriceGrid {
    title: string,
    subtitle: string,
    description: string,
}

export default defineComponent ({
    setup() {
        const PriceGrid = ref<PriceGrid>({
            title: 'Join our community',
            subtitle: '30-day, hassle-free money back guarantee',
            description: 'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.',
        });

      return {
            PriceGrid,
            MonthlySubscription,
            WhyUs,
         };
      }
});
</script>

<template>
   <div class="price-grid">
         <h3>{{ PriceGrid.title }}</h3>
         <h4>{{ PriceGrid.subtitle }}</h4>
         <p>{{ PriceGrid.description}}</p>
         <MonthlySubscription />
         <WhyUs />
   </div>
</template>