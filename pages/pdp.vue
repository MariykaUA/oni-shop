<template>
    <div>
        <Product />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Product from '../components/Product.vue'

export default defineComponent({
    components: {
        Product
    }
})
</script>