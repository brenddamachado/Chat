import { getAuth } from "firebase/auth";
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./App.css";
import { app, databaseApp } from "./serves/firebaseConfig";

const auth = getAuth(app);

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1> Chat</h1>
        <SignOut/>
      </header>
      <section>
      {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
    )
}


export const ChatRoom= () => {
  const dummy = useRef()
 const messageRef = collection(databaseApp, 'messages');
 const q = query(messageRef, orderBy('createdAt'), limit(25));
 const [messages] = useCollectionData(q, {IdField: 'id'});
 
 const [formValue, setformValue] = useState('');
 const sendMessage = async (e) => {
  e.preventDefault()

  const { photoURL, uid} = auth.currentUser;

  await addDoc(messageRef,{
    text: formValue,
    uid,
    photoURL,
    createdAt: serverTimestamp(),
  });
  setformValue('')
  dummy.current.scrollIntoView({behavior: 'smooth'})
 };
 
 return(
  <>
  <main>
    {messages &&
       messages.map((msg, index) => (
       <ChatMessage key={index}  message={msg}/>)
      )
    }
    <div ref={dummy}></div>
  </main>
  <form onSubmit={sendMessage}>
    <input type='text' 
    value={formValue} 
    onChange={(e) => setformValue(e.target.value)}
   />
    <button>enviar</button>
  </form>
  </>
 )
};

export const ChatMessage= (props) => {
  const {text, photoURL, uid} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
<div className={`message ${messageClass}`}>
  <img src= {photoURL}/>
  <p>{text}</p>
</div>
  )
 
};

export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
     <button className="sign-in" onClick={() => signInWithGoogle()}>
      logar com o Google
      </button>
  );
};
export const SignOut= () => {
  return (
    auth.currentUser && (
    <button className='sign-out'
   onClick={() => auth.signOut()}>
    sair
  </button> 
    )
  );
   
  
};