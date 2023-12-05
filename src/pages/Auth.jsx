import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/AuthTypeContext";
import AuthConditionalRender from "../components/AuthConditionalRender";
import { useAuth } from "../hooks/AuthHandler";
import { trio } from "ldrs";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";
import { useLoggedInContext } from "../hooks/LoggedInContext";
trio.register();

function Auth() {
  const { typeLogIn, toggleAuthType } = useAuthContext();
  const { setLogIn } = useLoggedInContext();
  const isLogIn = typeLogIn === "Sign In";
  const authType = isLogIn ? "Sign In" : "Sign Up";
  const [credentials, setCredentials, message, submit, loading] = useAuth();
  useEffect(() => {
    sessionStorage.clear();
    scrollTo(0, 0);
    setLogIn(false);
  });
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="sub-container h-screen w-screen flex items-center justify-center">
        {loading ? (
          <LoadingScreen></LoadingScreen>
        ) : (
          <form
            action=""
            onSubmit={(e) => submit(e, isLogIn)}
            className="p-4 flex flex-col shadow-2xl w-2/5 bg-neutral-1 rounded-lg"
          >
            <h2 className="mb-6 text-center">
              {isLogIn ? "Your Story Awaits" : "Your Next Chapter Starts Here"}
            </h2>
            <input
              name="username"
              placeholder="Username"
              type="text"
              onChange={setCredentials}
              required
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              onChange={setCredentials}
              className="mb-0"
              required
            />
            <label htmlFor="password">{message}</label>
            <AuthConditionalRender
              isLogIn={isLogIn}
              toggleAuthType={toggleAuthType}
            >
              <button
                name="submitBtn"
                className=" rounded-lg w-full p-2 mb-6 primary-btn"
              >
                {authType}
              </button>
            </AuthConditionalRender>
          </form>
        )}
      </div>
    </div>
  );
}

export default Auth;
