import {createContext} from "react"
import {initializeApp} from "firebase/app"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {getDatabase, set, ref} from "firebase/database"
import { useContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyAOtG-WTbujq1dTawGm8opOAdemJgCcOds",
    authDomain: "web-2e250.firebaseapp.com",
    projectId: "web-2e250",
    storageBucket: "web-2e250.appspot.com",
    messagingSenderId: "433966759101",
    appId: "1:433966759101:web:07b82720d8b43c8bea0bd4"
    // databaseURL: 'https://web-2e250-default-rtdb.firebaseio.com/',
  };

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email,password) => {
     return   createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const putData = (key,data) => set(ref(database, key), data)
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

// import {createContext} from "react"
// import {initializeApp} from "firebase/app"
// import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
// import { useContext } from "react";

// const firebaseConfig = {
//         apiKey: "AIzaSyAOtG-WTbujq1dTawGm8opOAdemJgCcOds",
//         authDomain: "web-2e250.firebaseapp.com",
//         projectId: "web-2e250",
//         storageBucket: "web-2e250.appspot.com",
//         messagingSenderId: "433966759101",
//         appId: "1:433966759101:web:07b82720d8b43c8bea0bd4"
//       };

//       const firebaseApp = initializeApp(firebaseConfig)
//       const firebaseAuth = getAuth(firebaseApp)

// const FirebaseContext = createContext(null)

// export const useFirebase = () => useContext(FirebaseContext)



// export const FirebaseProvider = (props) => {
//     const signupUserWithEmailAndPassword = (email,password) => {
//      return   createUserWithEmailAndPassword(firebaseAuth,email,password)
//     }
//     <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
//         {props.children}
//     </FirebaseContext.Provider>
// }