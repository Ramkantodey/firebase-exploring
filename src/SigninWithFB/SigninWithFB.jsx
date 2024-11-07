import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebaseinit";
const SigninWithFB = () => {
    const auth = getAuth(app);
    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div>
            <button onClick={handleFacebookLogin} className="btn btn-primary">Sign in with Facebook</button>
        </div>
    );
};

export default SigninWithFB;