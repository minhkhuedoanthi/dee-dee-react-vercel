import { Link } from "react-router-dom";
import LoginText from "../components/LoginText";
import Navbar from "../components/Navbar";

import "./Login.css";

const Login = () => {
  return (
    <div className="login1">

      <div className="pricing-plan">
        <div className="box4">
          <div className="rectangle4" />
        </div>
      </div>
      <input className="login-child" placeholder="Email" type="text" />
      <div className="email">Email</div>
      <input className="login-item" placeholder="Password" type="text" />
      <div className="button4">
        <div className="button-child" />
        <b className="login2">Login</b>
      </div>
      <div className="email">Email</div>
      <div className="password">Password</div>
      <LoginText />
      <Navbar />

    </div>
  );
};

export default Login;