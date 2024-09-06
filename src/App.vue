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
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';

  const isLoggedIn = ref(true)
  const router = useRouter()

  const auth = getAuth()

  watchEffect(() => {
    // runs after firebase is initialized
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        isLoggedIn.value = true
      } else {
        isLoggedIn.value = false
      }
    })
  })

  const logOut = async () => {
    await auth.signOut()
    router.push('/')
  }
</script>
<style scoped>

</style>
