import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import styled from "styled-components";
import firebase from "../../Firebase/firebase";

//Design Elements
import grid from "../../../assets/img/RegisterGrid1x.png";
import circle from "../../../assets/svg/circle.svg";
import halfCircle from "../../../assets/svg/halfCircle.svg";
import square from "../../../assets/svg/square.svg";
import triangle from "../../../assets/svg/triangle.svg";

const RegLogin = styled.div`
  display: flex;
  height: 100vh;

  @media ${props => props.theme.MediaQueries.small} {
    flex-direction: column;
    height: 100%;
  }
`;
const RegForm = styled.div`
  width: 50vw;

  @media ${props => props.theme.MediaQueries.small} {
    width: 100%;
    height: 100%;
  }
`;
const LoginForm = styled.div`
  width: 50vw;
  background-color: var(--color-secondary);
  z-index: 10;

  @media ${props => props.theme.MediaQueries.small} {
    width: 100%;
    height: 100%;
  }
`;
const RegContent = styled.div`
  text-align: center;

  .register__wrapper {
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    align-content: center;
    justify-content: center;
    text-align: center;

    @media ${props => props.theme.MediaQueries.small} {
      height: 100vh;
    }
  }
`;
const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  align-content: center;
  justify-content: center;
  text-align: center;

  @media ${props => props.theme.MediaQueries.small} {
    height: 100vh;
  }
`;
const Form = styled.div`
  align-self: center;
  margin-top: 9rem;

  @media ${props => props.theme.MediaQueries.small} {
    padding-bottom: 1.5rem;
  }
`;

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Register = ({ history }) => {
  //For Registration
  const [regemail, setRegEmail] = useState("");
  const [regpassword, setRegPassword] = useState("");
  const [name, setName] = useState("");

  //For Login
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  //Register new user function
  async function onRegister() {
    try {
      await firebase.register(name, regemail, regpassword);
      history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  }

  //Login Existing user function
  async function Login() {
    try {
      await firebase.login(loginemail, loginpassword);
      history.replace("/");
      location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  const myRef = useRef(null);

  const slide = () => {
    scrollToRef(myRef);
  };

  return (
    <RegLogin>
      <RegForm>
        <RegContent>
          <img src={grid} className="design-grid" />
          <img src={circle} className="design-circle" />
          <img src={halfCircle} className="design-halfCircle" />
          <img src={triangle} className="design-triangle" />
          <img src={square} className="design-square" />

          <div className="register__wrapper">
            <div className="log__head">
              <h1 className="reg-title">Get Started</h1>
              <div className="reg-text__container">
                <p className="reg-text">by creating your personal account</p>
              </div>
            </div>
            <Form>
              <form
                className="reg-form"
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <div className="reg-form__group">
                  <input
                    className="reg-form__input"
                    type="name"
                    placeholder="Name"
                    name="name"
                    autoComplete="disable"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name" className="reg-form__label">
                    Name
                  </label>
                </div>

                <div className="reg-form__group">
                  <input
                    className="reg-form__input"
                    type="email"
                    placeholder="Email"
                    autoComplete="disable"
                    name="email"
                    id="email"
                    value={regemail}
                    onChange={e => setRegEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email" className="reg-form__label">
                    Email
                  </label>
                </div>

                <div className="reg-form__group">
                  <input
                    className="reg-form__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="regpassword"
                    value={regpassword}
                    onChange={e => setRegPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="regpassword" className="reg-form__label">
                    Password
                  </label>
                </div>

                <button
                  className="reg-form__button"
                  type="submit"
                  onClick={onRegister}
                >
                  Sign Up
                </button>
              </form>

              <p>OR</p>

              <button
                className="reg-form__button log-form__button log-form__button-2"
                onClick={() => slide()}
              >
                Login
              </button>
            </Form>
          </div>
        </RegContent>
      </RegForm>

      <LoginForm ref={myRef}>
        <LoginContent>
          <div className="log__head">
            <div className="log-title__container">
              <h1>Already a Member?</h1>
            </div>
            <p className="log-text">Great to see you back!</p>
          </div>

          <Form className="for-log">
            <form
              className="reg-form log-form"
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <div className="log-form__group">
                <input
                  className="reg-form__input log-form__input"
                  type="email"
                  placeholder="Email"
                  autoComplete="disable"
                  name="email"
                  id="logemail"
                  value={loginemail}
                  onChange={e => setLoginEmail(e.target.value)}
                  required
                />
                <label
                  htmlFor="logemail"
                  className="reg-form__label log-form__label"
                >
                  Email
                </label>
              </div>

              <div className="log-form__group">
                <input
                  className="reg-form__input log-form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="logpassword"
                  value={loginpassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="logpassword"
                  className="reg-form__label log-form__label"
                >
                  Password
                </label>
              </div>

              <button
                style={{ marginTop: "2rem" }}
                className="reg-form__button log-form__button"
                type="submit"
                onClick={Login}
              >
                Login
              </button>
            </form>
            <img src={grid} className="design-grid-2" />
          </Form>
        </LoginContent>
      </LoginForm>
    </RegLogin>
  );
};

export default withRouter(Register);
