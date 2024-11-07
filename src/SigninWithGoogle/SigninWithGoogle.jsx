import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebaseinit";

const SigninWithGoogle = () => {
    const auth = getAuth(app)

    const provider = new GoogleAuthProvider();


    const signInBtnClick = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user.email);
            }).catch(error => {
                console.log('some error', error);
            })
    }

    return (
        <div className="text-center mt-10">
            <button onClick={signInBtnClick} className="btn  btn-warning">Sign In With Google</button>
            <h1>{ }</h1>
        </div>
    );
};

export default SigninWithGoogle;