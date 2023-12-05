import React from "react";
import { Link } from "react-router-dom";

function AuthConditionalRender({ children, isLogIn, toggleAuthType }) {
  return (
    <>
      {isLogIn ? (
        <Link className="underline text-blue-700 text-sm pb-2 pt-4">
          Forgot Password?
        </Link>
      ) : (
        <input
          name="confirmPass"
          placeholder="Confirm Password"
          type="password"
          className="mt-4"
          required
        />
      )}
      {children}
      {isLogIn ? (
        <p className=" text-center">
          Don't have an account?{" "}
          <Link
            className="underline text-blue-700"
            auth="Sign Up"
            onClick={toggleAuthType}
          >
            Sign up now!
          </Link>
        </p>
      ) : (
        <p className=" text-center">
          Have an account?{" "}
          <Link
            className="underline text-blue-700 "
            auth="Sign In"
            onClick={toggleAuthType}
          >
            Sign in here
          </Link>
        </p>
      )}
    </>
  );
}

export default AuthConditionalRender;
