<template>
    <button
        class="search-button">&#8594 Search items
    </button>     
</template>

<style lang="scss" scoped>
.search-button {
    margin-top: 2rem;
    color: $white;
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    font-weight: $weight-light;
    letter-spacing: 1.5px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -12px; //offset
      height: 6px; //text-decoration-thickness
      width: 100%;
      background-color: $white; 
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }
  
    &:hover::after {
      transform: scaleX(1);
    }
  }
</style>