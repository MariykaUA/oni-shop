<template>
  <div class="wrapper">
    <div class="loading-block large"></div>
    <div class="loading-block medium"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 16px;
  animation: pulse 1.5s ease-in-out infinite;
}

.loading-block {
  background-color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.loading-block.large {
  height: 20rem;
  width: 90%;
  margin: 0 auto;
}

.loading-block.medium {
  height: 16rem;
  width: 85%;
  margin: 0 auto;
}

/* Pulse animation */
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>

