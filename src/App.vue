<script setup>
</script>

<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/feed">Feed</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/sign-in">SignIn</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
