<script setup>
</script>
<template>
  <div class="home">
    <div class="hero">
      <div>
        <img src="/src/assets/logo.png" width="400px"/>
      </div>
      <div class="hero-text">
        <h1>Welcome to Feed</h1>
        <button class="button primary">Login</button>
      </div>
    </div>
  </div>
</template>
<style>
  .home {
    @apply 
      h-[80%]
  }

  .hero {
    @apply 
      h-[100%]
      flex
      items-center
      flex-col
  }

  .hero-text {
    @apply
      flex
      gap-2
  }
</style>