import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebaseinit";
import { useState } from "react";

const SigninWithGoogle = () => {
    const [user, setUser] = useState(null);
    console.log(user);

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const signInBtnClick = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const userInfo = result.user;
                setUser(userInfo)
            }).catch(error => {
                console.log('some error', error);
            })
    }

    const signOutBtn = () => {
        signOut(auth)
            .then(result => {
                setUser(null);
            })
            .catch(error => {
                console.log('some error', error);
            })
    }

    return (
        <div className="text-center mt-10">
            {user &&
                <div>
                    <div className="  justify-end flex">
                        <img className="rounded-full w-10 h-10" src={user.photoURL} alt="user-photo" />
                    </div>
                    <div>

                        <h2>{user.displayName}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
            }


            {
                user ? <button onClick={signOutBtn} className="btn btn-error">Log Out</button> : <button onClick={signInBtnClick} className="btn  btn-warning">Sign In With Google</button>
            }
        </div>
    );
};

export default SigninWithGoogle;