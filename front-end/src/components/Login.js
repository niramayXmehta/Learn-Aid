import React, { useState } from 'react';
import '../stylesheets/Login.css';

const ModalForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const closeModal = (setter) => {
    setter(false);
  };

  const openModal = (setter) => {
    setter(true);
  };


  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      uname: formData.get("uname"),
      psw: formData.get("psw"),
    };
  
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonData = await response.json();
  
      if (jsonData.ok) {
        alert("Login successful!");
        console.log("Login successful!");

        window.location.href = './..';
      } else {
        console.log("Login failed");

        if (jsonData.err) {
          alert(jsonData.err);
          console.log(jsonData.err);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      psw: formData.get("psw"),
      "psw-repeat": formData.get("psw-repeat"),
    };
  
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonData = await response.json();
  
      if (jsonData.ok) {
        alert("Registration successful!");
        console.log("Registration successful!");
      } else {
        console.log("Registration failed");

        if (jsonData.err) {
          alert(jsonData.err);
          console.log(jsonData.err);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <h2>Please login if you are member 💪</h2>

      <button onClick={() => openModal(setLoginModalOpen)} style={{ width: 'auto' }}>
        Login
      </button>

      {loginModalOpen && (
        <div className="modal">
          <form className="modal-content animate"  onSubmit={handleLoginSubmit}>
            <div className="imgcontainer">
              <span
                onClick={() => closeModal(setLoginModalOpen)}
                className="close"
                title="Close Modal"
                style={{ width: 'auto', position: 'relative', zIndex: 1000 }}
              >
                &times;
              </span>
              <img src="user2.jpg" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

                <button type="submit" className="submitbtn">
                  Login
                </button>

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                  name="remember"
                />{' '}
                Remember me
              </label>
            </div>
            <div className="container">
                <button
                  type="button"
                  onClick={() => closeModal(setLoginModalOpen)}
                  className="cancelbtn"
                >
                  Cancel
                </button>

                <span className="psw">
                  Forgot password?
                </span>
              </div>
          </form>
        </div>
      )}

      <h2>Please sign up if you are new here 😀</h2>

      <button onClick={() => openModal(setSignupModalOpen)} 
        style={{ width: 'auto'}}
>
        Sign Up
      </button>

      {signupModalOpen && (
        <div className="modal">
          <form className="modal-content animate" onSubmit={handleRegisterSubmit}>
            
            <div className="container">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                maxLength={25}
                required
              />

              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                maxLength={25}
                required
              />

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                  name="remember"
                  style={{ marginBottom: '15px' }}
                />
          </label>

          <p>
            By creating an account you agree to our{' '}
            <a href="#" style={{ color: 'dodgerblue' }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button
              type="button"
              onClick={() => closeModal(setSignupModalOpen)}
              className="cancelbtn"
            >
              Cancel
            </button>
            <button type="submit" className="submitbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  )}
</div>
);
};

export default ModalForm;