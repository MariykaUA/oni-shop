<script lang="ts">
import AnnualPlan from '~/components/AnnualPlan.vue';

export default {
    components: {
        AnnualPlan,
    },
};
</script>

<template>
    <div class="order-summary">
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
        </p>
        <AnnualPlan />
        <button> Proceed to Payment</button>
        <button>Cancel Order</button>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

$mobile-screen: 375px;
$desktop-screen: 1440px;

.order-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsl(233, 26%, 24%);
    border-radius: 24px;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 16px;
    text-align: center;
    margin-top: 3rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.877);
    width: 17rem;

    h2 {
        color: hsl(223, 47%, 23%);
        font-size: 24px;
        font-weight: 900;
    }

    p {
        color: hsl(224, 23%, 55%);
        font-weight: 500;
        line-height: 1.5;
    }
}
//Pale blue: hsl(225, 100%, 94%)
//Bright blue: hsl(245, 75%, 52%)
//Very pale blue: hsl(225, 100%, 98%)
//Desaturated blue: hsl(224, 23%, 55%)
//Dark blue: hsl(223, 47%, 23%)

</style>