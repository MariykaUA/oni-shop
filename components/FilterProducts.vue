<template>
    <div class="filter">
        <div class="types">
          <h3>Type</h3>
          <ul>
            <li>All</li>
            <li>Shoes</li>
            <li>Apparel</li>
            <li>Accessoires</li>
          </ul>
        </div>
        <div class="price">
          <h3 class="price-title">price</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.types {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #e2e2e262;  
  border-radius: 4px;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #e2e2e262;  
  border-radius: 4px;
}

.price-title {
  font-variant: small-caps;
}
</style>