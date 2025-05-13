<template>
    <div class="countdown-overlay">
        <div>
            <span class="hours">{{ hours }}</span> :
            <span class="minutes">{{ minutes }}</span> :
            <span class="seconds">{{ seconds }}</span>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');


const targetDate = new Date('2025-08-29T12:00:00'); 
let countdownInterval: ReturnType<typeof setInterval> | undefined;

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = targetDate.getTime() - now;

  if (difference <= 0) {
    // Countdown has ended
    clearInterval(countdownInterval);
    hours.value = '00';
    minutes.value = '00';
    seconds.value = '00';
    return;
  }

  const h = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const s = Math.floor((difference % (1000 * 60)) / 1000);

  hours.value = h.toString().padStart(2, '0');
  minutes.value = m.toString().padStart(2, '0');
  seconds.value = s.toString().padStart(2, '0');
};

onMounted(() => {
  // Initial call to prevent delay
  updateCountdown();

  // Update the countdown every second
  countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  // Clear the interval when the component unmounts
  clearInterval(countdownInterval);
});
</script>

<style lang="scss" scoped>
  .hours,
  .minutes,
  .seconds {
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.71);
    padding: 0.6rem; 
    color: rgb(28, 28, 28);
    border-radius: 8px; 
  }
</style>
