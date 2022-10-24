import { createApp } from 'vue'
import {Dialog, Loading, Quasar} from 'quasar'

import { createPinia } from 'pinia'
import quasarLang from 'quasar/lang/ko-KR'
import App from './App.vue'
import router from './router'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import '@/assets/customFont/css/spac.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from "axios";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import {userStore} from "@/stores/store";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn31e32io1TCqSeFGGhZojn0X_fpTK0EQ",
    authDomain: "sfac-81ca6.firebaseapp.com",
    projectId: "sfac-81ca6",
    storageBucket: "sfac-81ca6.appspot.com",
    messagingSenderId: "747613190612",
    appId: "1:747613190612:web:e7125e9a5dce8048b3fe41",
    measurementId: "G-67GD8S93C7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

axios.defaults.baseURL = import.meta.env.VITE_BASE_BACK_URL;

const app = createApp(App)

app.use(Quasar, {
    plugins: {
        Dialog, Loading
    }, // import Quasar plugins and add here
    lang: quasarLang,
})

app.use(createPinia())
app.use(router)

const refresh = localStorage.getItem("refresh")
if(refresh){
    try{
        let userUseCase = UserUseCase.getInstance();
        const verifyResult = await userUseCase.verifyToken(refresh)
        if(verifyResult){
            let userStore1 = userStore();
            const resultToken = await userUseCase.getTokenFromRefreshToken(refresh)
            localStorage.setItem("access",resultToken.access)
            localStorage.setItem("refresh",resultToken.refresh)
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access")}`;
            userStore1.setUserInfo(await userUseCase.getUserInfo())
            userStore1.setIsLogin(true)
            userUseCase.refreshTokenSchStart()
        }
    }catch (e) {

    } finally {
        app.mount('#app')
    }

}else {
    app.mount('#app')
}

