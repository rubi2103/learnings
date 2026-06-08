import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBanner from "./assets/loginbg.jpg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Login Successful");
    navigate("/quiz");
  };

  return (
    <>
      <style>
        {`
          input::placeholder {
            color: white;
            opacity: 1;
          }
        `}
      </style>
      <div
  style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${loginBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
       <div
  style={{
    width: "380px",
    padding: "40px",
    color: "white",
    textAlign: "center",

    background: "rgba(0, 0, 0, 0)",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    backdropFilter: "blur(8px)",
  }}
>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              margin: "0 auto 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              color: "white",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            👤
          </div>
          <h2
            style={{
              letterSpacing: "5px",
              fontWeight: "300",
              marginBottom: "50px",
              color: "white",
            }}
          >
            LOGIN
          </h2>

          <form onSubmit={handleLogin}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid white",
                marginBottom: "25px",
                paddingBottom: "8px",
              }}
            >
              <span
                style={{
                  marginRight: "10px",
                  color: "white",
                }}
              >
                ✉
              </span>

              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                  fontSize: "16px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid white",
                marginBottom: "25px",
                paddingBottom: "8px",
              }}
            >
              <span
                style={{
                  marginRight: "10px",
                  color: "white",
                }}
              >
                🔒
              </span>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                  fontSize: "16px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "25px",
                fontSize: "14px",
                color: "white",
              }}
            >
              <label style={{ color: "white" }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />{" "}
                Remember me
              </label>

              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </a>
            </div>

            {error && (
              <p
                style={{
                  color: "#ffdddd",
                  marginBottom: "10px",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#26292c",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                letterSpacing: "3px",
                borderRadius: "5px",
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;