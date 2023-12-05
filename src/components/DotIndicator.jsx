import React, { useState } from "react";

function DotIndicator({ pageCount = 0, currPage = 0 }) {
  const el = [];
  for (let i = 0; i < pageCount; i++) {
    el.push(
      <button
        key={i}
        className={
          "border-solid-2 border-red-500 w-2 h-[0.3rem] " +
          (i === currPage ? "w-6 bg-main-clr" : "bg-red-500")
        }
      ></button>
    );
  }
  return (
    <div className="flex gap-x-2 child:rounded-xl child:transition-[width] child:duration-500">
      {el}
    </div>
  );
}

export default DotIndicator;
