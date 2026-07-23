import "./Auth.css";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully!");

      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="auth">
      <div className="auth-container">

        <div className="auth-logo">
          <div className="logo-box">C</div>
          <span>CODEXA</span>
        </div>

        <div className="auth-card">

          <h1>Create Account</h1>
          <p>Join Codexa AI today</p>

          <div className="auth-content">

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="email-btn"
              onClick={signup}
            >
              Create Account
            </button>

            <p className="auth-switch">
              Already have an account?
              <Link to="/"> Login</Link>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}