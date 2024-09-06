<template>
  <div class="signIn">
    <form class="form" @submit.prevent="signUp">
      <h1>Signup with login</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <p v-show="errorMessage">{{ errorMessage }}</p>
      <button>Submit</button>
    </form>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const auth = getAuth()
  const router = useRouter()

  const validateError = (error) => {
    console.log(error)
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage.value = 'Invalid email'
        break

      case 'auth/user-not-found':
        errorMessage.value = 'No account with that email was found'
        break

      case 'auth/wrong-password':
        errorMessage.value = 'Incorrect password'
        break

      default:
        errorMessage.value = 'Email or password was incorrect'
        break
    }
  }
  
  const signUp = async() => {
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    .then((data) => {
      console.log(data)
      router.push('/feed')
    })

    .catch(error => {
      validateError(error.code)
    })
  }

</script>
<style scoped>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>