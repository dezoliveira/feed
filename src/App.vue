<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <span v-if="isLoggedIn">
        <RouterLink to="/feed">Feed</RouterLink>
      </span>
      <span v-if="isLoggedIn">
       <button @click="logOut">Logout</button> 
      </span>
      <span v-else>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/sign-in">SignIn</RouterLink>
      </span>
    </nav>
    <RouterView />
  </div>
</template>
<script setup>
  import { ref, watchEffect } from 'vue'
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';

  const isLoggedIn = ref(true)
  const auth = signOut()
  const router = useRouter()

  // runs after firebase is initialized
  onAuthStateChanged(auth, function(user) {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })

  const logOut = async () => {
    await signOut()
    router.push('/')
  }
</script>
<style scoped>

</style>
