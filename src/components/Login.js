import React, { useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/login.css";
import imgPath from "../assets/img/login_page.png";
import { login } from "../redux/actions/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [loginOrSignUp, setLoginOrSignUp] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const dataLogin = useSelector((state) => state.login.data);
  const error = useSelector((state) => state.login.error);

  useEffect(() => {
    if (error === true) {
      if (loginOrSignUp) {
        document.querySelector(".msg-log").textContent = "Đăng nhập thất bại";
        document.querySelector(".msg-log").classList.add("active");
        setTimeout(() => {
          document.querySelector(".msg-log").classList.remove("active");
          setVisible(false);
        }, 1200);
        console.log("Đăng nhập thất bại!");
      } else {
        document.querySelector(".msg-log").textContent = "Đăng kí thất bại";
        document.querySelector(".msg-log").classList.add("active");
        setTimeout(() => {
          document.querySelector(".msg-log").classList.remove("active");
          setVisible(false);
        }, 1200);
        console.log("Đăng kí thất bại");
      }
    }
    return () => console.log("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  const toggleLogin = (mode) => {
    const loginIn = document.getElementById("login-in");
    const loginUp = document.getElementById("login-up");
    if (mode === "signUpMode") {
      loginIn.classList.remove("block");
      loginUp.classList.remove("none");
      // Add classes
      loginIn.classList.toggle("none");
      loginUp.classList.toggle("block");
    } else {
      loginIn.classList.remove("none");
      loginUp.classList.remove("block");
      // Add classes
      loginIn.classList.toggle("block");
      loginUp.classList.toggle("none");
    }
  };

  function validateEmail(email) {
    return email.trim().split("@")[1] !== "gmail.com" ? false : true;
  }

  const signUp = (e) => {
    e.preventDefault();
    const usernameTag = document.querySelector("#username-up");
    const passwordTag = document.querySelector("#password-up");
    if (username.trim().length < 6) {
      usernameTag.parentElement.classList.add("empty");
      return;
    }

    if (password.trim().length < 6) {
      passwordTag.parentElement.classList.add("numError");
      return;
    }
    const data = {
      username: username,
      password: password,
      // email: email,
    };
    setLoginOrSignUp(false);
    if (location.pathname === "/login") console.log(data);
  };

  const signIn = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    dispatch(login(data));
  };

  const onFocusInput = (e) => {
    const tempClassName = e.target.parentElement.classList[1];
    if (tempClassName) {
      e.target.parentElement.classList.remove(tempClassName);
    }
  };

  return token ? (
    <Redirect to="/" />
  ) : (
    <div className="login">
      <div className="login__container">
        <div className="login__image" style={{ backgroundImage: `url(${imgPath})`, flex: 1, backgroundSize: "cover" }}>
        </div>
        <div className="login__form">
          <div className="logo">
            <img src="./Logo.svg" alt="Rentify Logo"/>
          </div>
          <div className="msg-log">MSG LOG</div>
          <form className="form" id="login-in">
            <h2>Đăng nhập</h2>
            <div className="input-group">
              <label>Username</label>
              <input
                  onFocus={onFocusInput}
                  type="text"
                  placeholder="Nhập username của bạn"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username-up"
              />
            </div>
            <div className="input-group">
              <label>Mật khẩu</label>
              <input
                  onFocus={onFocusInput}
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
              />
            </div>
            <button onClick={(e) => signIn(e)} className="login__button">
              Đăng nhập
            </button>

            <div className="form-footer">
              <span>Bạn chưa có tài khoản? </span>
              <button
                  type="button"
                  onClick={() => toggleLogin("signUpMode")}
              >
                Đăng kí
              </button>
            </div>
          </form>
          <form className="form none" id="login-up">
            <h2>Tạo tài khoản</h2>
            <div className="input-group">
              <label>Username</label>
              <input
                  onFocus={onFocusInput}
                  type="text"
                  placeholder="Nhập username của bạn"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username-up"
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                  onFocus={onFocusInput}
                  type="email"
                  placeholder="Nhập email của bạn"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-up"
              />
            </div>
            <div className="input-group">
              <label>Mật khẩu</label>
              <input
                  onFocus={onFocusInput}
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password-up"
              />
            </div>
            <button onClick={(e) => signUp(e)} >
              Đăng kí
            </button>
            <div className="form-footer">
              <span className="login__account">Bạn đã có tài khoản? </span>
              <span
                  className="login__signup"
                  id="sign-in"
                  onClick={() => toggleLogin("signInMode")}
              >
                Đăng nhập
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
