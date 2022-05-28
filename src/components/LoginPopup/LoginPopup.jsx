import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { HiX } from "react-icons/hi";
import "./LoginPopup.scss";

function verify (e) {
    alert("User Verified");
}

function LoginPopup(props) {

  return props.trigger ? (
    <div className="app__popup">
      <div className="popup__inner">
        <HiX className="close__btn" onClick={() => props.setTrigger(false)} />
        {props.children}

        <form className="form__login" action="" method="post" name="form">
          <input
            className="form__styling"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="form__styling"
            type="text"
            name="password"
            placeholder="Passpord"
            required
          />
          <div className="forget__pass">
            <a href="/">Forgot your password?</a>
          </div>
          <div className="app__recapta">
            <ReCAPTCHA 
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
            theme='dark'
            onChange={verify}
             />
          </div>
          <button className="btn__signin" type="submit">Log In</button>
          <div className="form__signup">
            <span>
              Don't have an account? <a href="/"> Sign Up</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  ) : (
    " "
  );
}

export default LoginPopup;
