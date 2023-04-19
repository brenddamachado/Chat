import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './App.css';
import { auth, databaseApp } from './serves/firebaseConfig';
import { collection, orderBy } from 'firebase/firestore';

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1> ReactChat</h1>
        <SignOut/>
      </header>
      <section>
      {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
    )
}


export const ChatRoom= () => {
 const menssageRef = collection(databaseApp, 'messages')
 const QueryMessagens = query(menssageRef, orderBy('createdAt'), limit(25));
 const [messages] = useCollectionData(QueryMessagens, {IdField: 'id'});
 const [formValue, setformValue] = useState('');
 const sendMessage = (e) => {
  e.preventDefault();
  
 }
 
 return(
  <>
  <main>
    {
      messages && messages.map((msg, index) => (
       <ChatMessage key={index}  menssage={msg}/>)
      )
    }
  </main>
  
  </>
 )
};

export const ChatMessage= (props) => {
  const {text, photoURL, uid} = props.menssage;
  const menssageClass = uid === auth.currentUser.uid ? 'send' : 'received';
  return (
<div className={`menssage ${menssageClass}`}>
  <img src= {photoURL}/>
  <p>{text}</p>
</div>
  )
 
};

export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
     <button className="sign-in" onClick={() => signInWithGoogle()}>
      logar com Google
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