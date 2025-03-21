<script lang="ts">
import { defineComponent, ref } from 'vue';

interface WhyUsItem {
    text: string,
}

interface WhyUs {
    title: string,
    content: WhyUsItem[],
}

export default defineComponent ({
    setup() {
        const WhyUs = ref<WhyUs>({
            title: 'Why Us',
            content: [
                { text: 'Tutorials by industry experts' },
                { text: 'Peer & expert code review' },
                { text: 'Coding exercises' },
                { text: 'Access to our GitHub repos' },
                { text: 'Community forum' },
                { text: 'Flashcard decks' },
                { text: 'New videos every week' },
            ],
        });

      return {
            WhyUs,
        };
      }
});

</script>

<template>
   <div class="why-us">
         <h4>{{ WhyUs.title }}</h4>
         <ul>
            <li v-for="(item, index) in WhyUs.content" :key="index">
              {{ item.text }}
            </li>
        </ul>
   </div>
</template>

<style lang="scss" scoped>

    .why-us {
        flex: 1fr;
        width: 50%;
        padding: 3rem;
        line-height: 180%;
        color: rgb(234, 244, 253);
        background-color:hsl(179, 62%, 43%);
        font-weight: 300;

        h4 {
            font-size: 1.2rem;
            font-weight: 500;
            margin: 0;
            margin-bottom: 1rem;
        }
    }
</style>