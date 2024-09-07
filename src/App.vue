<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <span v-if="isLoggedIn">
        <RouterLink to="/feed">Feed</RouterLink>
      </span>
      <div class="auth-buttons">
        <span v-if="isLoggedIn">
         <button @click="logOut">Logout</button> 
        </span>
        <span v-else>
          <span>
            <RouterLink to="/register">
              <button class="button primary">
                Register
              </button>
            </RouterLink>
          </span>
          <span>
            <RouterLink to="/sign-in">
              <button class="button secondary">
                SignIn
              </button>
            </RouterLink>
          </span>
        </span>
      </div>
    </nav>
    <RouterView />
  </div>
</template>
<script setup>
  import { ref, watchEffect } from 'vue'
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
  .navbar {
    @apply
      flex
      items-center
      justify-between
      gap-4
      bg-slate-800 
      px-[24px]
      py-[10px]
      text-slate-50
      w-full
      h-[20%]
  }

  .auth-buttons span {
    @apply 
      flex
      gap-2
  }
</style>
