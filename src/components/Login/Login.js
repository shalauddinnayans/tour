import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h1>this is login</h1>
      <button onClick={signInUsingGoogle}>Google Login</button>
    </div>
  );
};

export default Login;
