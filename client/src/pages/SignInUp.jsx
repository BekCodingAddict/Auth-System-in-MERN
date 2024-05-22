import "../SignInUpStyles.css";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function SignInUp() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={`container ${clicked ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minus natus est.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setClicked(!clicked)}
            >
              Sign Up
            </button>
          </div>
          <img src="./public/log.svg" className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minus natus est.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              Sign In
            </button>
          </div>
          <img src="./public/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignInUp;
