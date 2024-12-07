// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';

const LoginContainer = styled.div`
  /* Add your login form styles here */
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login (e.g., redirect to protected routes)
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors (e.g., display error message)
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
