<template>
  <div class="signIn">
    <form class="form" @submit.prevent="signUp">
      <h1>Signup with login</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
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

  const auth = getAuth()
  const router = useRouter()
  
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

    .catch((error) => {
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