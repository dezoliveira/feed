<script setup>
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/feed">Feed</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/sign-in">SignIn</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
  }
</style>
