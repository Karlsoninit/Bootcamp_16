import React from "react";
import app from "../base";

export const Register = () => {
  const handleSubmit = async event => {
    try {
      event.preventDefault();
      console.log(event.target.elements);
      const [email, password] = event.target.elements;
      const emailF = email.value;
      const passF = password.value;

      const data = await app
        .auth()
        .createUserWithEmailAndPassword(emailF, passF);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">register</button>
    </form>
  );
};
