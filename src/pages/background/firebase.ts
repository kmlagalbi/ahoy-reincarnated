import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAOPlw9dFlOV7rH0eVFEhe2xXreKOLfyn0",
  authDomain: "seongjuns-ahoy.firebaseapp.com",
  projectId: "seongjuns-ahoy",
  storageBucket: "seongjuns-ahoy.appspot.com",
  messagingSenderId: "906602411317",
  appId: "1:906602411317:web:7c0be0490459ef9d70c87c"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)