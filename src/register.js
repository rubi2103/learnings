import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";

function Register() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#2f7f74",
        minHeight: "100vh",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#e9f0f1",
          width: "90%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "180px",
              marginBottom: "20px",
            }}
          />

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            REGISTER TO OUR COURSE
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "500px",
              marginBottom: "30px",
            }}
          >
            Join our learning platform and build skills needed for the
            digital future. This course is designed to provide a strong
            foundation in programming and software development.
          </p>

          <button
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div
          style={{
            width: "450px",
            backgroundColor: "#1a1717",
            color: "white",
            padding: "30px",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            📖 REGISTER HERE
          </h2>

          <form
            style={{
              width: "100%",
            }}
          >
            <input
              type="text"
              placeholder="Enter Full Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Phone Number"
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              
            />
            <select style={selectStyle}>
              <option>Select Course</option>
              <option>Full Stack Development</option>
              <option>UI/UX Design</option>
              <option>Python</option>
              <option>C++</option>
            </select>

            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                width: "120px",
                padding: "12px",
                backgroundColor: "#6c63ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                display: "block",
                margin: "0 auto",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "20px",
  border: "none",
  borderBottom: "2px solid white",
  background: "transparent",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
  fontSize: "15px",
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "20px",
  boxSizing: "border-box",
  borderRadius: "4px",
  border: "none",
  fontSize: "15px",
};

export default Register;