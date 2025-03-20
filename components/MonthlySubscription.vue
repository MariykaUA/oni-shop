<script lang="ts">
import { defineComponent } from 'vue';

interface Subscription {
    title: string,
    price: number,
    perMonth: string,
    description: string,
    button: string,
}

export default defineComponent ({
    setup() {
        const Subscription = ref<Subscription>({
            title: 'Monthly Subscription',
            price: 29,
            perMonth: 'per month',
            description: 'Full access for less than $1 a day',
            button: 'Sign Up',
        });

      return {
            Subscription,
         };
      }
});
</script>

<template>
   <div class="monthly-subscription">
         <h4>{{ Subscription.title }}</h4>
         <h2>&dollar;{{ Subscription.price }}</h2>
         <p>{{ Subscription.perMonth }}</p>
         <p>{{ Subscription.description }}</p>
         <button>{{ Subscription.button }}</button>
   </div>
</template>