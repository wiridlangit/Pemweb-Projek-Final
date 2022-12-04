import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCeMPJUXfdmr0lYAWKuKxmJHwE5MO5c25Q",
//   authDomain: "cloud-firestore-36a71.firebaseapp.com",
//   projectId: "cloud-firestore-36a71",
//   storageBucket: "cloud-firestore-36a71.appspot.com",
//   messagingSenderId: "652464637762",
//   appId: "1:652464637762:web:3c02fc9923b880dd42eadb"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// import store
import store from './store/index'

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
