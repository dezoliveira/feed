import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "vue-auth-abafa.firebaseapp.com",
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
	projectId: "vue-auth-abafa",
	storageBucket: "vue-auth-abafa.appspot.com",
	messagingSenderId: "692760090351",
	appId: "1:692760090351:web:bf0aa13a9d9554a667ad1a"
};

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

