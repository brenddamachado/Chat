import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './App.css';
import { auth } from './serves/firebaseConfig';

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1> ReactChat</h1>
        <SignOut/>
      </header>
      <section></section>
    </div>
    )
}


export const ChatRoom= () => {
  return <h1>ChatRoom</h1>
}


export const SignIn = () => {
  const [useSignInWithGoogle ]= useSignInWithGoogle(auth);
  return (<button className='
  sign-in' onClick={() => useSignInWithGoogle()}> Logar com Google
  </button>
  );
};

export const SignOut= () => {
  return auth.currentUser && <button className='sign-out'
   onClick={() => auth.SignOut()}>
    sair
  </button> ;
   
  
}