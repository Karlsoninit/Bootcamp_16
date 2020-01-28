import React from "react";
import app from "../base";

export const Login = () => {
  const handleSubmit = async event => {
    try {
      event.preventDefault();
      console.log(event.target.elements);
      const [email, password] = event.target.elements;

      const data = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
