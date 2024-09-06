<template>
  <div class="register">
    <form class="form" @submit.prevent="register">
      <h1>Create an Account</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button>Submit</button>
    </form>
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
      router.push('/feed') // redirect to the feed
    })
    
    .catch(error => {
      console.log(error.code)
    })
  }
</script>
<style scoped>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>