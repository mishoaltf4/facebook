import React, {useEffect} from 'react'
import { firebase, auth } from './firebase/config'
import { Redirect, Switch,   Route } from 'react-router-dom'
import choose from './layers/choose'
import './App.css';

function App() {

  useEffect(() => {
    const user = new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        resolve(user)
      })
    })

    user.then((user) => {
      if(user){
        console.log("helloWorld");
      }else{
        console.log("ByeWorld")
      }
    })
  }, [])

  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const FacebookProvider = new firebase.auth.FacebookAuthProvider();

  const Facebook = () => {
    firebase.auth().signInWithPopup(FacebookProvider).then((user) => {
      console.log(user);
    })
  }

  const Google = () => {
    auth.signInWithPopup(GoogleProvider).then((result) => {
      const creditial = result.credential;
      const token = creditial.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      console.log("null user")
    })
  };


  return (
    <div>
      <div className="moon"></div>
      <div className="reg">
        <form>
          <h1>Registration</h1>
          <div className="reg-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reprehenderit pariatur vitae odit officiis tenetur beatae odio eum sapiente maiores!</p>
          </div>
          <div className="reg-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Submite</button>
          </div>
            <div className="reg-soc">
              <p>OR</p>
              <div className="reg-soc__btn">
                <div className="reg-btn__google" onClick={Google}>
                  <h3>G</h3>  
                </div>
                <button onClick={Facebook}>Facebook</button>
                <button onClick={signOut}>LogOut</button>
              </div>
            </div>
        </form>
      </div>
    </div>
    
  )
};

export default App