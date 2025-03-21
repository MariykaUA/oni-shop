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
      <div class="subscription-why-us">
         <MonthlySubscription />
         <WhyUs />
      </div>
   </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Lexend+Deca:wght@100..900&family=Noto+Serif+Old+Uyghur&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

$mobile-screen: 375px;
$desktop-screen: 1440px;

.price-grid {
   padding-top: 3rem;
   font-family: "Lexend Deca", sans-serif;
   width: 100vw;

   h3 {
      padding-left: 2rem;
      padding-bottom: 1.6rem;
      margin: 0;
      color: hsl(179, 62%, 43%);
   }

   h4 {
      margin: 0;
      padding-bottom: 1rem;
      padding-left: 2rem; 
      color: hsl(71, 73%, 54%);
   }

   p {
      padding: 0;
      margin: 0;
      padding-left: 2rem;
      padding-bottom: 3rem;
      padding-right: 2rem;
      line-height: 180%;
      color: rgb(175, 175, 175);
   }

.subscription-why-us {
    display: flex;
    width: 100%;

   }
}
</style>