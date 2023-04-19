import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './App.css';


export const App = () => {
  return (<div>
    
  </div>)
}


export const ChatRoom= () => {
  return <h1>ChatRoom</h1>
}


export const SignOut = () => {
  const [ ]= useSignInWithGoogle(auth);
  return <button className='
  sign-in' onClick={() => useSignInWithGoogle()}> Logar com Google</button>;
};
