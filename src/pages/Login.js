import "./Login.css";

import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <p>Sign In with Google to Continue</p>
      <button onClick={signIn}>Sign In Withn Google</button>
    </div>
  );
}

export default Login;
