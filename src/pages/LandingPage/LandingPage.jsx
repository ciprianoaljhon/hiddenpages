import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/AuthTypeContext";
import MainSection from "./MainSection";
import KeyFeatures from "./KeyFeatures";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import { useCart } from "../../hooks/useCart";
function LandingPage() {
  const { setLogIn } = useLoggedInContext();
  const { setCart } = useCart();
  useEffect(() => {
    setCart([]);
    sessionStorage.clear();
    setLogIn(false);
    scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page h-max flex flex-col items-center justify-center">
      <div className="sub-container h-screen pt-24 mb-10">
        <MainSection />
      </div>
      <KeyFeatures></KeyFeatures>
    </div>
  );
}

export default LandingPage;
