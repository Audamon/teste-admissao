import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { login } from "../Service/api";

function Login() {
    const [cpf, setCpf] = useState('');
    const [ password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const body = {
            cpf,
            password,
        };
        login(body);
        navigate('/profile');
    }
  return (
    <LoginContainer>
      <h2>Login</h2>
      <form >
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={loginHandler}>Login</button>
      </form>
      <Link to='sign-up' >Doesn't have an account yet? Register</Link>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: orange;
  height: 500px;
  width: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    > input {
      margin-bottom: 25px;
      height: 30px;
      width: 80%;
      outline: none;
      border: none;
      border-radius: 5px;
      font-size: 22px;
      color: black;
      ::placeholder{
          font-size: 22px;
          color: gray;
          padding-left: 5px;
      }
    }
    > button {
          border: none;
          height: 30px;
          width: 80%;
          border-radius: 5px;
          font-size: 22px;
          color: black;
      }
  }
  > h2 { 
      margin-top: 30px;
      font-size: 30px;

  }
`;
