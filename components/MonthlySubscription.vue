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
            <div class="price">
                <h2>&dollar;{{ Subscription.price }}</h2>
                <p class="per-month">{{ Subscription.perMonth }}</p>
            </div>
         <p>{{ Subscription.description }}</p>
         <button>{{ Subscription.button }}</button>
   </div>
</template>

<style lang="scss" scoped>
    .monthly-subscription {
        flex: 1fr;
        width: 50%;
        padding: 3rem;
        line-height: 180%;
        color: rgb(234, 244, 253);
        background-color:hsl(179, 60%, 38%);

        h4 {
            font-size: 1.2rem;
            font-weight: 500;
            margin: 0;
            margin-bottom: 1.5rem;
        }

        h2 {
            font-size: 2.5rem;
            font-weight: 400;
            margin: 0;
            margin-bottom: 0.7rem;
        }

        .price {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .per-month {
            font-size: 1rem;
            font-weight: 200;
            margin: 0;
            margin-bottom: 0.7rem;
        }

        p {
            font-size: 1rem;
            font-weight: 300;
            margin: 0;
            padding: 0;
        }

        button { 
            padding: 1rem 6rem;
            margin-top: 1.7rem;
            font-size: 1rem;
            font-weight: 600;
            background-color: hsl(71, 73%, 54%);
            color: rgb(234, 244, 253);
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(41, 47, 43, 0.2);

            &:hover {
                background-color: hsl(71, 73%, 44%);
            }
        }
    }
</style>