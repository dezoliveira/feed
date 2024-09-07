<template>  
  <div class="register">
    <div class="card">
      <div class="card-header">
        <h3>Create an Account</h3>
      </div>
      <form class="form" @submit.prevent="register">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <button class="button success">Submit</button>
      </form>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

  const email = ref('')
  const password = ref('')

  const auth = getAuth()
  const router = useRouter()

  const register = async () => {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    .then((data) => {
      console.log('Successfully registered!');
      router.push('/sign-in') // redirect to the feed
    })
    
    .catch(error => {
      console.log(error.code)
    })
  }
</script>
<style scoped>
  .register {
    @apply
      w-full
      h-[80vh]
      flex
      items-center
      justify-center
  }
</style>