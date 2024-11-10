import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();

const Login = () => {
 const [user, setUser] = useState(null);

const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) =>{
        console.log(result.user)
        setUser(result.user)
    })
    .catch(error =>{
        console.log('ERROR', error);
        setUser(null)
    })
}

const handleSignout = () => {

    signOut(auth).then(() =>{
        console.log('signout');
        setUser(null)
    })
    .catch(error => console.log(error))
}

    return (
        <div>
            
            {
                user ? <button onClick={handleSignout}>sign out</button>
                : 
                <button onClick={handleGoogleSignIn}>Login with Google</button>
            }
            {
                user && <h4>{user.displayName}</h4>
            }
        </div>
    );
};

export default Login;