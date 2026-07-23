import "./Auth.css";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ==========================
  // Google Login
  // ==========================
  const googleLogin = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log("Google User:", result.user);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Email Login
  // ==========================
 const handleEmail = async () => {
  const cleanEmail = email.trim();

  if (!cleanEmail || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    setLoading(true);

    await signInWithEmailAndPassword(auth, cleanEmail, password);

    navigate("/dashboard");
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-credential":
        alert("Invalid email or password.");
        break;

      case "auth/user-not-found":
        alert("No account found with this email.");
        break;

      case "auth/wrong-password":
        alert("Incorrect password.");
        break;

      case "auth/invalid-email":
        alert("Please enter a valid email address.");
        break;

      default:
        alert(error.message);
    }

    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="auth">
      <div className="auth-container">
        {/* Logo */}
        <div className="auth-logo">
          <div className="logo-box">C</div>
          <span>CODEXA</span>
        </div>

        {/* Card */}
        <div className="auth-card">
          <h1>Welcome to Codexa</h1>
          <p>Build ambitious software with AI</p>

          <div className="auth-content">
            {/* Google */}
            <button
              className="social-btn"
              onClick={googleLogin}
              disabled={loading}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              {loading ? "Please wait..." : "Continue with Google"}
            </button>

            {/* GitHub */}
            <button className="social-btn" disabled>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              Continue with GitHub
            </button>

            {/* Microsoft */}
            <button className="social-btn" disabled>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
              />
              Continue with Microsoft
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Login */}
            <button
              className="email-btn"
              onClick={handleEmail}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Continue with Email"}
            </button>

            {/* Sign Up */}
            <p className="auth-switch">
              Don't have an account?

              <Link
                to="/signup"
                style={{
                  color: "#4f46e5",
                  textDecoration: "none",
                  fontWeight: "600",
                  marginLeft: "5px",
                }}
              >
                Sign Up
              </Link>
            </p>

            {/* Footer */}
            <div className="auth-footer">
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}