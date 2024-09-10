<template>  
  <div class="register">
    <div class="card">
      <div class="card-header">
        <h3>Create an Account</h3>
      </div>
      <form class="form" @submit.prevent="register">
        <input type="text" placeholder="Email" v-model="email" />
        <span class="text-red-500" v-if="formData.email.error">
          <i class="fa-solid fa-circle-exclamation"></i>
          {{ formData.email.message }}
        </span>
        <input type="password" placeholder="Password" v-model="password" />
        <span class="text-red-500" v-if="formData.password.error">
          <i class="fa-solid fa-circle-exclamation"></i>
          {{ formData.password.message }}
        </span>
        <p v-show="errorMessage" class="errorMessage">{{ errorMessage }}</p>
        <button class="button success">Submit</button>
      </form>
    </div>
  </div>
</template>
<script setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  
  const formData = reactive({
    'email': {
      'error': false,
      'message': false
    },

    'password': {
      'error': false,
      'message': false
    }
  })

  const auth = getAuth()
  const router = useRouter()

  const emailValidate = () => {
    errorMessage.value = ''
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    formData.email.error = false
    formData.email.message = ''

    if (email.value.length <= 0) {
      formData.email.error = true
      formData.email.message = 'Email cant be null'

      return false
    }

    if (!emailRegex.test(email.value)){
      formData.email.error = true
      formData.email.message = 'Email is Invalid'

      return false
    }

    return true
  }

  const passwordValidate = () => {
    errorMessage.value = ''
    formData.password.error = false
    formData.password.message = ''
    
    if (password.value.length < 8) {
      console.log(password.value.length)
      formData.password.error = true
      formData.password.message = 'Password have to be more than 8 characteres'

      return false
    }

    return true
  }

  const formValidate = () => {
    if (emailValidate() && passwordValidate()) {
      return true
    }

    return false
  }

  const validateError = (error) => {
    console.log(error)
    switch (error) {
      case 'auth/email-already-in-use':
        errorMessage.value = 'Email already in use!'
        break

      default:
      errorMessage.value = 'Email or password was incorrect'
      
      break
    }
  }

  const register = async () => {
    const isValid = formValidate()
    if (isValid) {
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
        console.log('error')
        validateError(error.code)
      })
    }

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