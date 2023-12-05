import React from "react";

function ImageGroup({ imgSrc, className }) {
  return (
    <div
      className={"flex relative gap-0 items-center justify-center " + className}
    >
      <img src={imgSrc[0]} alt="" className="" />
    </div>
  );
}

export default ImageGroup;
