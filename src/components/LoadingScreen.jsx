import React from "react";
import { spiral } from "ldrs";

spiral.register();

// Default values shown

// Default values shown

function LoadingScreen(props) {
  const { size = "40", speed = "0.7", color = "black" } = props;
  return (
    <div className="">
      <l-spiral size={size} speed={speed} color={color}></l-spiral>
    </div>
  );
}

export default LoadingScreen;
