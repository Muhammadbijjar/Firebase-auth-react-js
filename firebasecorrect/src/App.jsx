import { useState } from 'react'
import { useFirebase } from './context/Firebase'

import './App.css'

function App() {
  const firebase = useFirebase()
  console.log('Firebase',firebase)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='App'>
      <h1>Firebase</h1>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter email' />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter password' />
      <button onClick={() => {
      firebase.signupUserWithEmailAndPassword(email,password) 
      firebase.putData("users/" + "BijjarHoth", {email,password})
        
       } }
      >Sign up</button>
      </div>
    
  );
}

export default App
