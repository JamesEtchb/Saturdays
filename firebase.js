import { initializeApp, cert } from "firebase-admin/app" 
import { getFirestore } from "firebase-admin/firestore"
import {credentials} from "./credentials.js"

initializeApp({
    credential: cert(credentials)
}) 

const db = getFirestore()

//above is a base for basically anything thatll connect to a database
//ready to do anything with the databse

db.collection('cars').get()
.then(movies => {
    movies.docs.forEach(movie => {console.log(movie.data())})
})
.catch(console.error)